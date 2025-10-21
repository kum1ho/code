import { NextResponse } from 'next/server';
import { locations } from '@/data/store';

export async function GET() {
  return NextResponse.json({ locations });
}
