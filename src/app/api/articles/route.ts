import { NextResponse } from 'next/server';
import { articleData } from '@/data/articleData';

export async function GET() {
	return NextResponse.json(articleData);
}
