export type Product = {
  id: string;
  category: 'coffee' | 'tea' | 'dessert' | 'gear';
  name: string;
  description: string;
  price: number;
  badge?: string;
  featured?: boolean;
  image?: string;
  tastingNotes?: string[];
};

export type Story = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  coverImage?: string;
};

export type OrderItem = {
  name: string;
  quantity: number;
};

export type Order = {
  id: string;
  customer: string;
  total: number;
  status: 'очікує' | 'виконується' | 'завершено';
  createdAt: string;
  channel: 'app' | 'delivery' | 'in-store' | 'corporate';
  etaMinutes: number;
  items: OrderItem[];
};

export type KPI = {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  secondary?: string;
};

export type Experience = {
  id: string;
  title: string;
  description: string;
  highlight: string;
  duration: string;
  tags: string[];
  image: string;
};

export type Location = {
  id: string;
  city: string;
  name: string;
  address: string;
  schedule: string;
  phone: string;
  type: 'flagship' | 'boutique' | 'partner';
  coordinates: { lat: number; lng: number };
  features: string[];
  image: string;
};

export type LoyaltyTier = {
  id: string;
  name: string;
  description: string;
  minPoints: number;
  perks: string[];
  bonus: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  status: 'доступно' | 'майже немає місць' | 'повністю';
};

export type Workshop = {
  id: string;
  title: string;
  mentor: string;
  level: 'beginner' | 'advanced';
  description: string;
  nextDate: string;
};

export type Partner = {
  id: string;
  name: string;
  focus: string;
  tagline: string;
};

export type MetricHighlight = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
};
