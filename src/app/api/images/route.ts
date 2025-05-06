import { NextResponse } from 'next/server';
import { imageData } from '@/data/imageData';

export async function GET() {
	return NextResponse.json(imageData);
}
