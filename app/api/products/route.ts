import { NextResponse } from 'next/server';
import { products } from '@/data/store';

export async function GET() {
  return NextResponse.json({ products });
}
