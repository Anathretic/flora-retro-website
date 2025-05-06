import { NextResponse } from 'next/server';
import { opinionsData } from '@/data/opinionsData';

export async function GET() {
	return NextResponse.json(opinionsData);
}
