import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const TG_LINK = 'https://t.me/voroshilinaella';
const HERO_IMG =
  'https://cdn.poehali.dev/projects/37648556-50d5-42c0-ad96-805e03ac1b12/files/2baffcdd-77de-4f07-b967-527386b8e2e9.jpg';

const weeks = [
  {
    week: 'Неделя 1',
    icon: 'Radar',
    title: 'Обнаружение узлов и остановка оттока энергии',
    focus:
      'Останавливаем слив ресурса на обслуживание прошлых травм, возвращаем управление себе и открываем истинные настройки восприятия.',
    sessions: [
      {
        n: 'Сеанс 1',
        name: 'Активация чистого канала',
        text: 'Раскрываем врождённые способности и интуитивный потенциал: ясновидение, яснознание, яснослушание, ясночувствование, яснообоняние. Очищаем каналы восприятия от ментального шума.',
      },
      {
        n: 'Сеанс 2',
        name: 'Аудит утечек и возврат ресурса',
        text: 'Убираем энергетические утечки, скрытые привязки и деструктивные контракты с прошлыми партнёрами и обидами. Возвращаем ваш ресурс вам.',
      },
    ],
    result:
      'Выключается вечная «мыслемешалка», уходит тревожность. Просыпаетесь отдохнувшей, растворяется многолетняя усталость. Сила возвращается из прошлого — ощущение, что груз свалился с плеч.',
  },
  {
    week: 'Неделя 2',
    icon: 'ShieldOff',
    title: 'Зачистка ментальных вирусов и выход из кармических петель',
    focus:
      'Находим неосознанные сценарии, которые крутятся в голове и создают тупиковую реальность. Перестаём бороться с жизнью через напряжение и контроль.',
    sessions: [
      {
        n: 'Сеанс 3',
        name: 'Ментальная деконструкция',
        text: 'Находим, разрушаем и выводим заданные извне мысли, ложные желания и деструктивные программы. Глубокое очищение сознания от ментального мусора и чужих фильтров.',
      },
      {
        n: 'Сеанс 4',
        name: 'Разрушение кармических узлов',
        text: 'Разрушаем циклические деструктивные сценарии, петли и кармические узлы, которые заставляли годами наступать на одни грабли в отношениях, работе и финансах.',
      },
    ],
    result:
      'Перестаёте наказывать себя и соглашаться на меньшее. Разрываете замкнутый круг «то густо, то пусто». В голове становится тихо и просторно — видите свои живые цели, а не чужие шаблоны.',
  },
  {
    week: 'Неделя 3',
    icon: 'Crown',
    title: 'Освобождение от родовых оков и активация масштаба',
    focus:
      'Разрешаем себе быть большой и видимой для этого мира. Хватит прятать силу из-за страха осуждения или «Травмы ведьмы».',
    sessions: [
      {
        n: 'Сеанс 5',
        name: 'Освобождение от родовых программ',
        text: 'Разделяем вашу суверенную судьбу и тяжёлые сценарии рода: выживание, бедность, «тяжёлая доля», лояльность к несчастным предкам.',
      },
      {
        n: 'Сеанс 6',
        name: 'Активация масштаба и финансового потолка',
        text: 'Выжигаем страх больших денег, синдром самозванца и блок на подъём цен. Растворяем «Травму ведьмы» — спазм горла и страх видимости, мешающий заявлять о себе.',
      },
    ],
    result:
      'Свобода от груза предков — род становится опорой. Исчезает самозванец и страх критики. Появляется внутреннее право называть высокую честную стоимость без стыда и вины.',
  },
  {
    week: 'Неделя 4 · Бонус',
    icon: 'Sunrise',
    title: 'Заземление ресурса в материю и манифестация новой линии',
    focus:
      'Направляем возвращённую энергию на реальные цели. Духовные изменения приносят осязаемые плоды: деньги, здоровье, гармонию и уверенность.',
    sessions: [
      {
        n: 'Сеанс 7',
        name: 'Заземление ресурса в материальный мир',
        text: 'Направляем всю возвращённую энергию на реальные цели: привлечение клиентов, выстраивание новой линии жизни, улучшение здоровья и достатка.',
      },
      {
        n: 'Сеанс 8',
        name: 'Манифестация пути и стабилизация поля',
        text: 'Закрепляем высоковибрационное состояние в нервной системе. Учимся удерживать состояние в социуме и оставаться заземлённым проводником.',
      },
    ],
    result:
      'Реальные перемены в кошельке: доход растёт без надрыва, приходят новые клиенты. Появляется ясный план, как заявлять о себе. Нервная система привыкает к новому сильному состоянию — без «откатов».',
  },
];

const benefits = [
  { icon: 'Banknote', t: 'Свой честный чек', d: 'Уходит страх и стыд называть цену. Вы поднимаете стоимость со спокойствием «я этого стою».' },
  { icon: 'Magnet', t: 'Клиенты без прогревов', d: 'Притягиваются люди, которые ценят вашу глубину и платят сразу, без долгих раздумий.' },
  { icon: 'BrainCircuit', t: 'Чистая, тихая голова', d: 'Исчезает мыслемешалка и тревога за завтра. Просыпаетесь с ощущением «я со всем справлюсь».' },
  { icon: 'BatteryCharging', t: 'Энергия на себя', d: 'Появляется чистый ресурс на свои удовольствия, отдых и желания, а не только на других.' },
  { icon: 'ShieldCheck', t: 'Твёрдое спокойное «нет»', d: 'Учитесь отказывать без вины. Окружающие перестают сливать на вас негатив.' },
  { icon: 'Users', t: 'Выход из роли спасателя', d: 'Перестаёте решать чужие проблемы в ущерб себе. Токсичное окружение мягко уходит.' },
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
              <Icon name="Sparkle" size={14} /> авторский 30-дневный интенсив
            </div>
            <h1 className="font-display text-5xl font-light leading-[1.05] sm:text-6xl lg:text-7xl">
              Выход
              <br />
              из <span className="gold-gradient-text">матрицы</span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
              Полная перепрошивка энергосистемы и возвращение права на свою жизнь.
              Выход из матрицы выживания и дефицита за 30 дней глубокой работы.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
              <span className="flex items-center gap-2">
                <Icon name="CalendarDays" size={16} className="text-gold" /> 30 дней · 8 сеансов
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Video" size={16} className="text-gold" /> онлайн, 2 встречи в неделю
              </span>
            </div>
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
            Каждая встреча — это мощный трансформационный энергетический сеанс в глубокой
            тишине: работа на уровне первопричины в поле, живое групповое заземление опыта
            и блок ответов на вопросы. 21 день глубокой работы + 7 дней интеграции.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { icon: 'Waves', t: 'Сеанс в тишине', d: 'Работа на уровне первопричины в поле' },
              { icon: 'MessagesSquare', t: 'Живой разбор', d: 'Заземление состояний и телесных откликов' },
              { icon: 'HelpCircle', t: 'Ответы на вопросы', d: 'Поддержка на каждом этапе пути' },
            ].map((g) => (
              <div key={g.t} className="glass rounded-2xl p-7 text-left">
                <Icon name={g.icon} className="text-gold" size={30} />
                <h3 className="mt-4 font-display text-2xl">{g.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.d}</p>
              </div>
            ))}
          </div>

          <div className="glass mx-auto mt-10 max-w-2xl rounded-2xl p-7 text-left">
            <div className="flex items-center gap-2 text-gold">
              <Icon name="Target" size={20} />
              <h3 className="font-display text-2xl">Для кого этот интенсив</h3>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Для помогающих практиков, целителей, психологов и сильных людей, которые
              тайно устали тащить всё на себе, застряли в финансовом тупике и живут в
              режиме «черновика».
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="relative py-24">
        <div className="container relative z-10 max-w-5xl">
          <div className="text-center">
            <SectionLabel icon="ScrollText">Программа</SectionLabel>
            <h2 className="font-display text-4xl font-light sm:text-5xl">
              Путь длиною в <span className="gold-gradient-text">30 дней</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              8 трансформационных сеансов, выстроенных в чёткую последовательность — от
              остановки оттока энергии до манифестации новой жизни.
            </p>
          </div>
          <div className="mt-14 space-y-8">
            {weeks.map((w, i) => (
              <div
                key={w.week}
                className="glass relative overflow-hidden rounded-3xl p-7 sm:p-9"
              >
                <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-border pb-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/5 glow-gold">
                    <Icon name={w.icon} className="text-gold" size={26} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-gold">
                      {w.week}
                    </span>
                    <h3 className="font-display text-2xl leading-tight sm:text-3xl">
                      {w.title}
                    </h3>
                  </div>
                  <span className="ml-auto hidden font-display text-6xl text-gold/10 sm:block">
                    0{i + 1}
                  </span>
                </div>

                <p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">
                  {w.focus}
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {w.sessions.map((s) => (
                    <div
                      key={s.n}
                      className="rounded-2xl border border-border/60 bg-background/30 p-5"
                    >
                      <span className="text-xs uppercase tracking-wider text-gold">
                        {s.n}
                      </span>
                      <h4 className="mt-1 font-display text-xl">{s.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-gold/20 bg-gold/[0.04] p-5">
                  <Icon name="Flame" className="mt-0.5 shrink-0 text-gold" size={20} />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gold">
                      Результат недели
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                      {w.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
            >
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer">
                <Icon name="Sparkles" size={18} /> Хочу участвовать
              </a>
            </Button>
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