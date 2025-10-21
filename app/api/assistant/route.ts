import { NextResponse } from 'next/server';

type RequestBody = {
  messages: { role: 'user' | 'assistant'; content: string }[];
};

const keywords: Record<string, string> = {
  кава: 'Рекомендую Espresso Aurora з виразними шоколадними нотами або Nitro Rose Cold Brew для холодного заряду енергії.',
  чай: 'Matcha Breeze створено для легкого старту дня, а Honey Lavender Oolong — для вечірнього релаксу.',
  десерт: 'Скуштуйте Salted Caramel Cube — він ідеально поєднується з фірмовим колд-брю.',
  доставка: 'Ми доставляємо у межах Києва за 30 хвилин. Також доступний самовивіз з Bloom Station.',
  локац: 'Найближчі точки: Bloom Station у Києві, Heritage Roastery у Львові та Seaside Brew Loft в Одесі. Дивіться карту на сторінці локацій.',
  solstice: 'Solstice — преміальний рівень програми лояльності з консʼєрж-сервісом та турами фермами. Накопичте 3400 балів або запросіть корпоративний пакет.',
  партнер: 'Ми співпрацюємо з Vercel, Fjord Labs та PlantWave. Напишіть на partners@sunleaf.ua, щоб отримати презентацію.'
};

export async function POST(request: Request) {
  const body = (await request.json()) as RequestBody;
  const lastMessages = body.messages?.filter((message) => message.role === 'user') ?? [];
  const last = lastMessages.at(-1);
  const reply = last
    ? Object.entries(keywords).find(([key]) => last.content.toLowerCase().includes(key))?.[1] ??
      'Я зафіксував запит і передам його команді Sunleaf. Запитайте про каву, чай або доставку — і я дам більше деталей!'
    : 'Привіт! Я Leafy, запитайте мене про меню, доставку або співпрацю.';
  return NextResponse.json({ reply });
}
