import { NextResponse } from 'next/server';
import { articleData } from '@/data/articleData';

export async function GET(req: Request, { params }: { params: { id: string } }) {
	const id = params.id;

	if (!id) {
		return new Response('Id is required', { status: 400 });
	}

	const article = articleData.find(item => item.href.endsWith(`/${id}`));

	if (!article) {
		return NextResponse.json({ error: 'Not found' }, { status: 404 });
	}

	return NextResponse.json(article);
}
