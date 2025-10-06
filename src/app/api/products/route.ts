import { NextResponse } from 'next/server';
import clientPromise from '@/shared/lib/mongodb';

export async function GET() {
	try {
		const client = await clientPromise;
		const db = client.db('flora_retro_products');
		const col = db.collection('rental_products');
		const products = await col.find({}).toArray();
		return NextResponse.json(products);
	} catch (error) {
		console.error('MongoDB error:', error);
		return NextResponse.json({ error: 'Błąd serwera' }, { status: 500 });
	}
}
