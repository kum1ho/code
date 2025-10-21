import { NextResponse } from 'next/server';
import { loyaltyTiers } from '@/data/store';

export async function GET() {
  return NextResponse.json({ loyaltyTiers });
}
