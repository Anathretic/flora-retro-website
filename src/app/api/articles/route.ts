import { NextResponse } from 'next/server';
import { articleData } from '@/features/articles/data/articleData';

export async function GET() {
	return NextResponse.json(articleData);
}
