import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const TG_LINK = 'https://t.me/voroshilinaella';
const HERO_IMG =
  'https://cdn.poehali.dev/projects/37648556-50d5-42c0-ad96-805e03ac1b12/files/2baffcdd-77de-4f07-b967-527386b8e2e9.jpg';

const modules = [
  {
    n: '01',
    title: 'Распознать матрицу',
    icon: 'Eye',
    text: 'Учимся видеть навязанные программы, чужие сценарии и автоматические реакции, которые управляют жизнью.',
  },
  {
    n: '02',
    title: 'Отключить автопилот',
    icon: 'Unplug',
    text: 'Практики осознанности и работа с вниманием. Возвращаем себе право выбирать, а не реагировать.',
  },
  {
    n: '03',
    title: 'Чистка пространства',
    icon: 'Sparkles',
    text: 'Освобождаемся от страхов, ограничивающих убеждений и энергетических привязок прошлого.',
  },
  {
    n: '04',
    title: 'Связь с собой',
    icon: 'Compass',
    text: 'Находим внутренний компас, слышим интуицию и восстанавливаем контакт со своей истинной природой.',
  },
  {
    n: '05',
    title: 'Новая реальность',
    icon: 'Sunrise',
    text: 'Учимся создавать жизнь из состояния осознанности, а не из страха. Проявляем желаемое.',
  },
  {
    n: '06',
    title: 'Выход и интеграция',
    icon: 'DoorOpen',
    text: 'Закрепляем результат, выстраиваем новые опоры и план жизни за пределами старой системы.',
  },
];

const benefits = [
  { icon: 'BrainCircuit', t: 'Ясность мышления', d: 'Уходит туман в голове, появляется чёткость решений.' },
  { icon: 'HeartPulse', t: 'Внутренний покой', d: 'Тревога сменяется устойчивостью и опорой на себя.' },
  { icon: 'Flame', t: 'Возврат энергии', d: 'Силы, что уходили на чужие сценарии, возвращаются к вам.' },
  { icon: 'Telescope', t: 'Новое видение', d: 'Жизнь открывается с тех сторон, которых вы не замечали.' },
  { icon: 'Key', t: 'Свобода выбора', d: 'Вы перестаёте быть на автопилоте и выбираете сами.' },
  { icon: 'Infinity', t: 'Связь с собой', d: 'Восстанавливается контакт со своей истинной природой.' },
];

const reviews = [
  {
    name: 'Анна',
    role: 'Участница потока',
    text: 'Я будто проснулась после долгого сна. Перестала жить чужими ожиданиями и наконец услышала себя. Это перевернуло всё.',
  },
  {
    name: 'Дмитрий',
    role: 'Участник потока',
    text: 'Думал, это очередной эзотерический тренинг. Оказалось — глубочайшая работа. Ушли страхи, с которыми жил годами.',
  },
  {
    name: 'Марина',
    role: 'Участница потока',
    text: 'После интенсива появилась невероятная ясность. Решения, которые я откладывала годами, приняла за неделю. Спасибо!',
  },
];

const SectionLabel = ({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) => (
  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
    <Icon name={icon} size={14} /> {children}
  </div>
);

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { id: 'about', label: 'О интенсиве' },
    { id: 'program', label: 'Программа' },
    { id: 'results', label: 'Результаты' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'me', label: 'Обо мне' },
    { id: 'contact', label: 'Контакты' },
  ];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="dark min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-stars opacity-60" />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-[hsl(265,50%,8%)]/40 to-background" />

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full glass">
        <div className="container flex h-16 items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <Icon name="Atom" className="text-gold animate-spin-slow" size={26} />
            <span className="font-display text-xl tracking-wide text-foreground">
              Выход из матрицы
            </span>
          </button>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button
            asChild
            className="hidden bg-primary text-primary-foreground hover:bg-primary/90 md:inline-flex"
          >
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer">
              Хочу участвовать
            </a>
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} className="text-gold" size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="glass border-t border-border md:hidden">
            <div className="container flex flex-col gap-1 py-4">
              {nav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="py-2 text-left text-muted-foreground hover:text-gold"
                >
                  {n.label}
                </button>
              ))}
              <Button asChild className="mt-2 bg-primary text-primary-foreground">
                <a href={TG_LINK} target="_blank" rel="noopener noreferrer">
                  Хочу участвовать
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative flex min-h-screen items-center pt-16">
        <div className="container relative z-10 grid gap-12 py-16 md:grid-cols-2 md:items-center">
          <div className="animate-rise">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
              <Icon name="Sparkle" size={14} /> трансформационный интенсив
            </div>
            <h1 className="font-display text-5xl font-light leading-[1.05] sm:text-6xl lg:text-7xl">
              Выход
              <br />
              из <span className="gold-gradient-text">матрицы</span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
              Пробуждение сознания и выход за пределы навязанной реальности. Снимите
              чужие программы и вернитесь к себе настоящему.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
              >
                <a href={TG_LINK} target="_blank" rel="noopener noreferrer">
                  <Icon name="Sparkles" size={18} /> Хочу участвовать
                </a>
              </Button>
              <button
                onClick={() => scrollTo('program')}
                className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-gold"
              >
                <Icon name="ArrowDown" size={16} /> Смотреть программу
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 animate-pulse-glow rounded-full bg-violet/30 blur-3xl" />
            <div className="animate-float">
              <div className="overflow-hidden rounded-full border border-gold/30 glow-violet">
                <img
                  src={HERO_IMG}
                  alt="Портал выхода из матрицы"
                  className="h-[320px] w-[320px] object-cover sm:h-[420px] sm:w-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24">
        <div className="container relative z-10 max-w-4xl text-center">
          <SectionLabel icon="Moon">О интенсиве</SectionLabel>
          <h2 className="font-display text-4xl font-light sm:text-5xl">
            Реальность — это <span className="gold-gradient-text">выбор</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Большую часть жизни мы проживаем на автопилоте — по чужим сценариям, страхам и
            убеждениям, которые когда-то приняли за свои. «Выход из матрицы» — это
            глубокая практика пробуждения, где вы научитесь видеть эти программы и
            освобождаться от них.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { icon: 'Eye', t: 'Увидеть', d: 'Распознать иллюзии и навязанные сценарии' },
              { icon: 'Unplug', t: 'Освободиться', d: 'Снять старые программы и привязки' },
              { icon: 'Sunrise', t: 'Создать', d: 'Жизнь из осознанности, а не страха' },
            ].map((g) => (
              <div key={g.t} className="glass rounded-2xl p-7 text-left">
                <Icon name={g.icon} className="text-gold" size={30} />
                <h3 className="mt-4 font-display text-2xl">{g.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="relative py-24">
        <div className="container relative z-10 max-w-5xl">
          <div className="text-center">
            <SectionLabel icon="ScrollText">Программа</SectionLabel>
            <h2 className="font-display text-4xl font-light sm:text-5xl">
              Шесть <span className="gold-gradient-text">ступеней</span> пробуждения
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Путь от распознавания матрицы до жизни в новой реальности.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {modules.map((m) => (
              <div
                key={m.n}
                className="group glass relative overflow-hidden rounded-2xl p-7 transition-all hover:border-gold/40"
              >
                <span className="absolute -right-2 -top-3 font-display text-7xl text-gold/10 transition-colors group-hover:text-gold/20">
                  {m.n}
                </span>
                <Icon name={m.icon} className="text-gold" size={28} />
                <h3 className="mt-4 font-display text-2xl">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="relative py-24">
        <div className="container relative z-10 max-w-5xl">
          <div className="text-center">
            <SectionLabel icon="Star">Результаты</SectionLabel>
            <h2 className="font-display text-4xl font-light sm:text-5xl">
              Что вы <span className="gold-gradient-text">обретёте</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.t}
                className="glass rounded-2xl p-7 transition-transform hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                  <Icon name={b.icon} className="text-gold" size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative py-24">
        <div className="container relative z-10 max-w-5xl">
          <div className="text-center">
            <SectionLabel icon="Quote">Отзывы</SectionLabel>
            <h2 className="font-display text-4xl font-light sm:text-5xl">
              Голоса <span className="gold-gradient-text">пробудившихся</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="glass flex flex-col rounded-2xl p-7">
                <Icon name="Quote" className="text-gold/40" size={32} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  {r.text}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary font-display text-lg text-gold">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-medium">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="me" className="relative py-24">
        <div className="container relative z-10 max-w-5xl">
          <div className="glass grid items-center gap-10 rounded-3xl p-8 sm:p-12 md:grid-cols-[280px_1fr]">
            <div className="relative mx-auto">
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-violet/30 blur-2xl" />
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-gold/30 bg-secondary/40 glow-gold">
                <Icon name="UserRound" className="text-gold/70" size={90} />
              </div>
            </div>
            <div>
              <SectionLabel icon="Feather">Обо мне</SectionLabel>
              <h2 className="font-display text-4xl font-light">Элла Ворошилина</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Проводник в трансформационных практиках, наставник по пробуждению
                сознания. Я помогаю людям снимать чужие программы, возвращаться к себе и
                выстраивать жизнь из состояния внутренней свободы.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                За годы практики через мои программы прошли сотни человек, которые
                перестали жить на автопилоте и обрели ясность, опору и контакт со своей
                истинной природой.
              </p>
              <Button
                asChild
                className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
              >
                <a href={TG_LINK} target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={18} /> Написать мне
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="relative py-24">
        <div className="container relative z-10 max-w-3xl">
          <div className="glass relative overflow-hidden rounded-3xl border-gold/20 p-10 text-center sm:p-14">
            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 animate-pulse-glow rounded-full bg-violet/40 blur-3xl" />
            <Icon name="DoorOpen" className="relative mx-auto text-gold" size={46} />
            <h2 className="relative mt-6 font-display text-4xl font-light sm:text-5xl">
              Готовы <span className="gold-gradient-text">выйти</span>?
            </h2>
            <p className="relative mx-auto mt-5 max-w-md text-muted-foreground">
              Сделайте первый шаг к свободе. Напишите мне в Telegram — расскажу о
              ближайшем потоке и отвечу на все вопросы.
            </p>
            <Button
              asChild
              size="lg"
              className="relative mt-9 bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
            >
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer">
                <Icon name="Sparkles" size={18} /> Хочу участвовать
              </a>
            </Button>
            <div className="relative mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Icon name="Send" size={16} className="text-gold" />
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                @voroshilinaella
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border py-10">
        <div className="container relative z-10 flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <Icon name="Atom" className="text-gold" size={20} />
            <span className="font-display text-lg text-foreground">Выход из матрицы</span>
          </div>
          <p>© {new Date().getFullYear()} Элла Ворошилина. Все права защищены.</p>
          <a
            href={TG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-gold"
          >
            <Icon name="Send" size={16} /> Telegram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
