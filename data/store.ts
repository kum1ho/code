import {
  Event,
  Experience,
  KPI,
  Location,
  LoyaltyTier,
  MetricHighlight,
  Order,
  Partner,
  Product,
  Story,
  Testimonial,
  Workshop
} from '@/lib/types';

export const products: Product[] = [
  {
    id: 'espresso-aurora',
    category: 'coffee',
    name: 'Espresso Aurora',
    description: 'Глибокий шоколадний профіль з нотами цитрусу та вершків.',
    price: 89,
    badge: 'бестселер',
    featured: true,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['темний шоколад', 'червоний апельсин', 'вершковий післясмак']
  },
  {
    id: 'matcha-breeze',
    category: 'tea',
    name: 'Matcha Breeze',
    description: 'Церемоніальний порошок матча з мигдалевим молоком та лаймом.',
    price: 119,
    badge: 'новинка',
    featured: true,
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['морські водорості', 'мигдаль', 'свіжий лайм']
  },
  {
    id: 'honey-lavender',
    category: 'tea',
    name: 'Honey Lavender Oolong',
    description: 'Улуни з ферми Sunleaf, інфузовані медом акації та лавандою.',
    price: 149,
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['квітковий мед', 'лаванда', 'незрілі персики']
  },
  {
    id: 'salted-caramel-cube',
    category: 'dessert',
    name: 'Salted Caramel Cube',
    description: 'Аерований мус із карамеллю та фісташковою крихтою.',
    price: 135,
    featured: true,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['солона карамель', 'фісташка', 'ванільний крем']
  },
  {
    id: 'nitro-rose',
    category: 'coffee',
    name: 'Nitro Rose Cold Brew',
    description: 'Холодна колд-брю інфузія з пелюстками троянди та ванілі.',
    price: 129,
    image: 'https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['рожеві пелюстки', 'ваніль', 'відтінки какао']
  },
  {
    id: 'cascara-nectar',
    category: 'tea',
    name: 'Cascara Nectar Spritz',
    description: 'Ігристий напій із каскари, цитрусу та квіткового меду.',
    price: 102,
    badge: 'сезон',
    image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['гібіскус', 'червона смородина', 'мед акації']
  },
  {
    id: 'velvet-brew-kit',
    category: 'gear',
    name: 'Velvet Brew Kit',
    description: 'Фірмовий сет для альтернативного заварювання з керамічним дріпером.',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['повний контроль', 'інтуїтивний дизайн', 'eco-пакування']
  },
  {
    id: 'cocoa-moss',
    category: 'dessert',
    name: 'Cocoa Moss Terrine',
    description: 'Шарований мус із матча-ганашем, какао-крихтою та лаймовим курдом.',
    price: 158,
    image: 'https://images.unsplash.com/photo-1604908176997-12518821ad00?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'solar-tonic',
    category: 'coffee',
    name: 'Solar Tonic Espresso',
    description: 'Експресо на льоду з грейпфрутовим тоніком та ферментованим жасмином.',
    price: 118,
    image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=800&q=80'
  }
];

export const stories: Story[] = [
  {
    id: 'behind-the-bloom',
    title: 'Як народжується купаж Aurora',
    excerpt: 'Від зернини до чашки: подорож на ферму Sunleaf у Коста-Риці.',
    content:
      'Коли ми вперше створювали Aurora, то шукали баланс між потужністю еспресо та витонченістю фруктових відтінків. Команда Sunleaf проводить кожний збір вручну, відбираючи тільки 5% врожаю для обсмажування дрібними партіями...',
    author: 'Олена Коваль',
    date: '2024-04-05',
    coverImage: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'leafy-ai',
    title: 'Leafy: штучний інтелект, що знає ваш смак',
    excerpt: 'Розповідаємо, як наш асистент допомагає обрати ідеальний сет.',
    content:
      'Leafy поєднує дані з програми лояльності, замовлення в закладах та онлайн, щоб пропонувати персоналізовані рекомендації. Чим більше ви взаємодієте з Sunleaf, тим точнішими стають пропозиції...',
    author: 'Команда R&D Sunleaf',
    date: '2024-03-28',
    coverImage: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'zero-waste',
    title: 'Zero-waste ініціативи Sunleaf',
    excerpt: 'Як ми повторно використовуємо кавову гущу та пакування.',
    content:
      'Sunleaf має замкнений цикл переробки: гуща стає добривом для теплиць, а пакування — компостованим. Ми співпрацюємо з локальними фермерами та дизайнерами, щоб перетворювати відходи в нові продукти...',
    author: 'Ірина Лісова',
    date: '2024-02-19',
    coverImage: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?auto=format&fit=crop&w=1200&q=80'
  }
];

export const orders: Order[] = [
  {
    id: 'ORD-1045',
    customer: 'Андрій Мельник',
    total: 864,
    status: 'очікує',
    createdAt: '2024-05-11T09:24:00Z',
    channel: 'delivery',
    etaMinutes: 18,
    items: [
      { name: 'Solar Tonic Espresso', quantity: 2 },
      { name: 'Cocoa Moss Terrine', quantity: 1 }
    ]
  },
  {
    id: 'ORD-1033',
    customer: 'Марія Слонь',
    total: 1299,
    status: 'виконується',
    createdAt: '2024-05-10T16:03:00Z',
    channel: 'corporate',
    etaMinutes: 45,
    items: [
      { name: 'Matcha Breeze', quantity: 6 },
      { name: 'Salted Caramel Cube', quantity: 6 }
    ]
  },
  {
    id: 'ORD-0998',
    customer: 'Ілля Поліщук',
    total: 432,
    status: 'завершено',
    createdAt: '2024-05-08T13:40:00Z',
    channel: 'app',
    etaMinutes: 0,
    items: [
      { name: 'Espresso Aurora', quantity: 3 },
      { name: 'Cascara Nectar Spritz', quantity: 1 }
    ]
  },
  {
    id: 'ORD-0984',
    customer: 'Христина Байрак',
    total: 297,
    status: 'виконується',
    createdAt: '2024-05-08T11:21:00Z',
    channel: 'in-store',
    etaMinutes: 6,
    items: [
      { name: 'Nitro Rose Cold Brew', quantity: 1 },
      { name: 'Honey Lavender Oolong', quantity: 1 }
    ]
  }
];

export const kpis: KPI[] = [
  {
    title: 'MRR',
    value: '₴1.2M',
    change: '+18%',
    positive: true,
    secondary: '1830 активних підписок'
  },
  {
    title: 'NPS',
    value: '74',
    change: '+6',
    positive: true,
    secondary: '3000+ відгуків за 30 днів'
  },
  {
    title: 'Середній чек',
    value: '₴274',
    change: '+9%',
    positive: true,
    secondary: 'Програма лояльності додає +₴37'
  },
  {
    title: 'Час доставки',
    value: '24 хв',
    change: '-3 хв',
    positive: true,
    secondary: "Live-контроль кур'єрів"
  }
];

export const metricHighlights: MetricHighlight[] = [
  {
    label: 'Повернення гостей',
    value: '68%',
    change: '+11%',
    positive: true
  },
  {
    label: 'CO2-навантаження',
    value: '-32%',
    change: '-5%',
    positive: true
  },
  {
    label: 'Leafy відповів',
    value: '12K',
    change: '+41%',
    positive: true
  },
  {
    label: 'Рейтинг закладів',
    value: '4.93',
    change: '+0.2',
    positive: true
  }
];

export const experiences: Experience[] = [
  {
    id: 'signature-flight',
    title: 'Signature Flight «Aurora»',
    description: 'Дегустаційна подорож через три обсмаження з синхронізованими десертами.',
    highlight: 'Ідеально для перших знайомств',
    duration: '60 хв',
    tags: ['guided', 'immersive', 'pairing'],
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'sunset-ceremony',
    title: 'Sunset Tea Ceremony',
    description: 'Сутінкова церемонія матча та улунів із музичним супроводом живого піаніста.',
    highlight: 'Wow-ефект для романтичних вечорів',
    duration: '75 хв',
    tags: ['tea', 'live-music', 'sunset'],
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'sensory-lab',
    title: 'Sensory Lab з Leafy',
    description: 'AI аналізує ваші вподобання й формує персоналізований сет напоїв.',
    highlight: 'Leafy формує профіль смаку',
    duration: '45 хв',
    tags: ['ai', 'personalized', 'lab'],
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80'
  }
];

export const locations: Location[] = [
  {
    id: 'kyiv-bloom',
    city: 'Київ',
    name: 'Bloom Station',
    address: 'вул. Ярославів Вал, 15',
    schedule: 'Щодня 08:00 — 22:00',
    phone: '+380 44 555 12 34',
    type: 'flagship',
    coordinates: { lat: 50.4501, lng: 30.5234 },
    features: ['immersive bar', 'sensorна кімната', 'ботанічний сад на даху'],
    image: 'https://images.unsplash.com/photo-1437419764061-2473afe69fc2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lviv-roastery',
    city: 'Львів',
    name: 'Heritage Roastery',
    address: 'пл. Ринок, 8',
    schedule: 'Щодня 09:00 — 21:00',
    phone: '+380 32 500 77 11',
    type: 'boutique',
    coordinates: { lat: 49.8419, lng: 24.0315 },
    features: ['лабораторія обсмаження', 'лекторій', 'zero-waste магазин'],
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'odesa-seaside',
    city: 'Одеса',
    name: 'Seaside Brew Loft',
    address: 'вул. Ланжеронівська, 25',
    schedule: 'Пн-Пт 08:00 — 21:00, Вих. 09:00 — 23:00',
    phone: '+380 48 700 44 55',
    type: 'partner',
    coordinates: { lat: 46.4825, lng: 30.7233 },
    features: ['пляжна тераса', 'нічні сеті', 'VR-бариста тренажер'],
    image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1200&q=80'
  }
];

export const loyaltyTiers: LoyaltyTier[] = [
  {
    id: 'sprout',
    name: 'Sprout',
    description: 'Перший рівень — знайомство з Sunleaf та доступ до базових привілеїв.',
    minPoints: 0,
    perks: ['1 вітальний напій', 'персональні рекомендації Leafy', 'доступ до ранніх релізів'],
    bonus: '+5% кешбеку'
  },
  {
    id: 'bloom',
    name: 'Bloom',
    description: 'Рівень для постійних гостей із запрошеннями на приватні дегустації.',
    minPoints: 1200,
    perks: ['priority-замовлення', 'закриті події раз на місяць', 'подарунки до свят'],
    bonus: '+9% кешбеку'
  },
  {
    id: 'solstice',
    name: 'Solstice',
    description: 'Преміальний статус із консʼєрж-сервісом і персональним куратором.',
    minPoints: 3400,
    perks: ['виділена лінія Leafy Concierge', 'брендові тури фермами', 'корпоративні тарифи'],
    bonus: '+15% кешбеку'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Катерина Романчук',
    role: 'СЕО, Bloomy Studio',
    quote: 'Sunleaf — це досвід, що продає себе. Наші клієнти закохуються в атмосферу та повертаються знову і знову.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    name: 'Марк Гнатюк',
    role: 'Засновник, Nordic Fit',
    quote: 'Програма лояльності та AI-аналітика Sunleaf допомагають нам розуміти гостей і зростати по 20% щомісяця.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '3',
    name: 'Олена Соловей',
    role: 'Фуд-журналістка',
    quote: 'Sunleaf задає новий стандарт гастрономічних вражень в Україні. Це must-visit для всіх поціновувачів.',
    avatar: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80'
  }
];

export const events: Event[] = [
  {
    id: 'event-immersive',
    title: 'Immersive Brew Night',
    description: 'Командне змагання бариста з доповненою реальністю та дегустаціями.',
    date: '2024-06-14',
    location: 'Bloom Station, Київ',
    status: 'майже немає місць'
  },
  {
    id: 'event-farm',
    title: 'Digital Farm Tour',
    description: 'Віртуальна екскурсія фермами Sunleaf з прямим звʼязком із фермерами.',
    date: '2024-06-28',
    location: 'Онлайн | Leafy Studio',
    status: 'доступно'
  },
  {
    id: 'event-chef',
    title: "Chef's Table x Sunleaf",
    description: 'Партнерський вечір із шефами Michelin Guide та AI-пейрингами.',
    date: '2024-07-03',
    location: 'Heritage Roastery, Львів',
    status: 'повністю'
  }
];

export const workshops: Workshop[] = [
  {
    id: 'ws-intro',
    title: 'Barista 2.0',
    mentor: 'Дарія Рубін',
    level: 'beginner',
    description: 'Основи еспресо, альтернатив, латте-арту та цифрових чеклістів.',
    nextDate: '2024-06-05'
  },
  {
    id: 'ws-ai',
    title: 'AI Beverage Designer',
    mentor: 'Leafy + R&D команда',
    level: 'advanced',
    description: 'Як генерувати меню за допомогою Leafy та швидко тестувати нові рецепти.',
    nextDate: '2024-06-22'
  },
  {
    id: 'ws-fermentation',
    title: 'Fermentation Lab',
    mentor: 'Макс Чабан',
    level: 'advanced',
    description: 'Глибинні техніки ферментації зерна та десертних інфузій.',
    nextDate: '2024-07-01'
  }
];

export const partners: Partner[] = [
  {
    id: 'partner-vercel',
    name: 'Vercel',
    focus: 'Хостинг та DX',
    tagline: 'Прискорюємо релізи Sunleaf у хмарі'
  },
  {
    id: 'partner-fjord',
    name: 'Fjord Labs',
    focus: 'Сенсорика',
    tagline: 'Розробляємо wow-пристрої для дегустацій'
  },
  {
    id: 'partner-plant',
    name: 'PlantWave',
    focus: 'Zero-waste',
    tagline: 'Перетворюємо кавову гущу на добрива'
  }
];
