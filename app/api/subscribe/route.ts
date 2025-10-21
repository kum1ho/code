import { NextResponse } from 'next/server';

type RequestBody = {
  email?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as RequestBody;
  if (!body.email) {
    return NextResponse.json({ ok: false, message: 'Вкажіть email для підписки.' }, { status: 400 });
  }
  return NextResponse.json({ ok: true, message: 'Leafy вже готує лист із подарунковим кодом.' });
}
