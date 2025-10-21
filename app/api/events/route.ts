import { NextResponse } from 'next/server';
import { events } from '@/data/store';

export async function GET() {
  return NextResponse.json({ events });
}
