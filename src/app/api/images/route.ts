import { NextResponse } from 'next/server';
import { imageData } from '@/features/car-hire/data/imageData';

export async function GET() {
	return NextResponse.json(imageData);
}
