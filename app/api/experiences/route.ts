import { NextResponse } from 'next/server';
import { experiences } from '@/data/store';

export async function GET() {
  return NextResponse.json({ experiences });
}
