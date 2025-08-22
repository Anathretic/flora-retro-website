import { NextResponse } from 'next/server';
import { opinionsData } from '@/features/home/Opinions/data/opinionsData';

export async function GET() {
	return NextResponse.json(opinionsData);
}
