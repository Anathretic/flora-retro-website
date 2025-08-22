import { NextResponse } from 'next/server';
import { offerData } from '@/features/home/Offer/data/offerData';

export async function GET() {
	return NextResponse.json(offerData);
}
