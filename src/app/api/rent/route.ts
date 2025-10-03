import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/shared/lib/mongodb';

export async function POST(req: NextRequest) {
	try {
		const { id, quantity } = await req.json();

		if (!id || !quantity || quantity <= 0) {
			return NextResponse.json({ error: 'Niepoprawne dane' }, { status: 400 });
		}

		const client = await clientPromise;
		const db = client.db('flora_retro_products');
		const collection = db.collection('rental_products');

		const product = await collection.findOne({ id });

		if (!product) {
			return NextResponse.json({ error: 'Produkt nie istnieje' }, { status: 404 });
		}

		if (product.stock < quantity) {
			return NextResponse.json({ error: 'Za mało na stanie' }, { status: 400 });
		}

		const updatedProduct = await collection.findOneAndUpdate(
			{ id },
			{ $inc: { stock: -quantity } },
			{ returnDocument: 'after' }
		);

		if (updatedProduct) return NextResponse.json({ success: true, product: updatedProduct.value });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: 'Błąd serwera' }, { status: 500 });
	}
}
