import { NextResponse } from 'next/server';
import { orders } from '@/data/store';

export async function GET() {
  return NextResponse.json({ orders });
}
