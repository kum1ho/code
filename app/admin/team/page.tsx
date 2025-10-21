import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sunleaf Admin — Команда'
};

const team = [
  {
    name: 'Олена Коваль',
    role: 'Head of Coffee',
    location: 'Київ',
    status: 'online',
    skills: ['ферментація', 'куратор купажів'],
    upcomingShift: '12.05 · 09:00 — 17:00'
  },
  {
    name: 'Сергій Лісний',
    role: 'Chief Experience Officer',
    location: 'Львів',
    status: 'offline',
    skills: ['immersive події', 'AR-наративи'],
    upcomingShift: '13.05 · 14:00 — 22:00'
  },
  {
    name: 'Марія Слонь',
    role: 'CRM Lead',
    location: 'Одеса',
    status: 'online',
    skills: ['аналітика', 'персоналізація'],
    upcomingShift: 'Сьогодні · 11:00 — 19:00'
  }
];

export default function AdminTeamPage() {
  return (
    <section className="section">
      <div className="glass-card space-y-6 p-8">
        <h1 className="text-3xl font-semibold text-coffee">Команда Sunleaf</h1>
        <p className="text-sm leading-relaxed text-coffee/80">
          Керуйте доступами, призначайте ролі та бачте, хто зараз онлайн. Це демо-перелік ключових учасників.
        </p>
        <ul className="space-y-4">
          {team.map((member) => (
            <li key={member.name} className="flex flex-col gap-4 rounded-2xl border border-white/50 bg-white/70 px-5 py-4 shadow-sm md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-base font-semibold text-coffee">{member.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-coffee/60">{member.role}</p>
                <p className="text-xs text-coffee/60">{member.location}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-coffee/70">
                  {member.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-white/80 px-3 py-1 uppercase tracking-[0.2em]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 md:items-end">
                <span className="inline-flex items-center gap-2 rounded-full bg-tea-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-tea-600">
                  <span className={`h-2 w-2 rounded-full ${member.status === 'online' ? 'bg-tea-500' : 'bg-coffee/40'}`} aria-hidden />
                  {member.status}
                </span>
                <p className="text-xs uppercase tracking-[0.2em] text-coffee/60">Найближча зміна</p>
                <p className="text-xs text-coffee/70">{member.upcomingShift}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="rounded-3xl border border-white/40 bg-white/70 p-6 text-sm text-coffee/80">
          <p className="text-xs uppercase tracking-[0.2em] text-coffee/60">Інтеграції</p>
          <p className="mt-2">Синхронізуйте графіки з Notion, Slack та linear для прозорого планування команд.</p>
        </div>
      </div>
    </section>
  );
}
