import { NextResponse } from 'next/server';
import { offerData } from '@/data/offerData';

export async function GET() {
	return NextResponse.json(offerData);
}
