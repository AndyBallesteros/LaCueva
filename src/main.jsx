import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Beef,
  CalendarDays,
  Clock3,
  Flame,
  Languages,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Wine,
  X,
} from 'lucide-react';
import './styles.css';

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
];

const copy = {
  es: {
    nav: ['Inicio', 'La carta', 'Ambiente', 'Contacto'],
    menuButton: 'Abrir menu',
    closeMenu: 'Cerrar menu',
    eyebrow: 'Braseria & Arroces',
    heroTitle: 'La Cueva',
    heroText:
      'Fuego, producto mediterraneo y sobremesas largas en una braseria cercana, actual y con alma de casa.',
    primaryCta: 'Ver carta',
    secondaryCta: 'Reservar',
    openToday: 'Abierto para comidas y cenas',
    menuKicker: 'Carta original',
    menuTitle: 'Toda la carta, con la misma disposicion del restaurante',
    menuText:
      'Consulta entrantes, tapas, arroces, asados, carnes a la brasa, postres, cafes, cervezas y bebidas tal como aparecen en el documento adjunto.',
    menuPdf: 'Abrir PDF',
    menuDownload: 'Descargar carta',
    page: 'Pagina',
    featuresTitle: 'Mesa de brasas, arroces y tapas',
    features: [
      {
        icon: Flame,
        title: 'Brasas al punto',
        text: 'Parrillada, solomillos, costillas y verduras con guarnicion a elegir.',
      },
      {
        icon: Beef,
        title: 'Arroces con reserva',
        text: 'Paella de pollo, marisco, conejo, atun o mixta preparada bajo pedido.',
      },
      {
        icon: Wine,
        title: 'Tapas de siempre',
        text: 'Marinera, matrimonio, almendras, boquerones, ensaladillas y clasicos de barra.',
      },
    ],
    vibeTitle: 'Un sitio para quedarse un rato mas',
    vibeText:
      'La Cueva mezcla el caracter de una braseria tradicional con una presencia visual fresca: madera, fuego, platos generosos y una carta pensada para compartir.',
    stats: [
      ['6', 'paginas de carta'],
      ['30+', 'platos principales'],
      ['3', 'idiomas en la web'],
    ],
    contactTitle: 'Reserva tu mesa',
    contactText:
      'Llama o escribe para confirmar horario, disponibilidad y arroces con reserva previa.',
    address: 'Restaurante La Cueva',
    schedule: 'Comidas y cenas',
    phone: '+34 000 000 000',
    footer: 'Braseria & Arroces La Cueva',
  },
  en: {
    nav: ['Home', 'Menu', 'Atmosphere', 'Contact'],
    menuButton: 'Open menu',
    closeMenu: 'Close menu',
    eyebrow: 'Grill House & Rice Dishes',
    heroTitle: 'La Cueva',
    heroText:
      'Live-fire cooking, Mediterranean produce and long table moments in a warm, modern restaurant with a homely soul.',
    primaryCta: 'View menu',
    secondaryCta: 'Book',
    openToday: 'Open for lunch and dinner',
    menuKicker: 'Original menu',
    menuTitle: 'The full menu, keeping the restaurant layout',
    menuText:
      'Browse starters, tapas, rice dishes, roasts, grilled meats, desserts, coffee, beers and drinks exactly as shown in the attached document.',
    menuPdf: 'Open PDF',
    menuDownload: 'Download menu',
    page: 'Page',
    featuresTitle: 'Grill, rice dishes and tapas',
    features: [
      {
        icon: Flame,
        title: 'Chargrilled classics',
        text: 'Mixed grill, sirloins, ribs and seasonal vegetables with your choice of side.',
      },
      {
        icon: Beef,
        title: 'Rice by reservation',
        text: 'Chicken, seafood, rabbit, tuna or mixed paella prepared on request.',
      },
      {
        icon: Wine,
        title: 'Traditional tapas',
        text: 'Marinera, matrimonio, almonds, whitebait, salads and bar counter favourites.',
      },
    ],
    vibeTitle: 'A place to stay a little longer',
    vibeText:
      'La Cueva blends the character of a traditional grill house with a fresh visual presence: wood, fire, generous plates and a menu made for sharing.',
    stats: [
      ['6', 'menu pages'],
      ['30+', 'main dishes'],
      ['3', 'website languages'],
    ],
    contactTitle: 'Book your table',
    contactText:
      'Call or write to confirm opening hours, availability and rice dishes that require advance booking.',
    address: 'Restaurante La Cueva',
    schedule: 'Lunch and dinner',
    phone: '+34 000 000 000',
    footer: 'Grill House & Rice Dishes La Cueva',
  },
  fr: {
    nav: ['Accueil', 'Carte', 'Ambiance', 'Contact'],
    menuButton: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    eyebrow: 'Grillades & Riz',
    heroTitle: 'La Cueva',
    heroText:
      'Cuisine au feu, produits mediterraneens et longues tables dans une brasserie chaleureuse, moderne et pleine de caractere.',
    primaryCta: 'Voir la carte',
    secondaryCta: 'Reserver',
    openToday: 'Ouvert midi et soir',
    menuKicker: 'Carte originale',
    menuTitle: 'Toute la carte, avec la meme disposition que le restaurant',
    menuText:
      'Consultez les entrees, tapas, riz, rotis, viandes grillees, desserts, cafes, bieres et boissons comme dans le document joint.',
    menuPdf: 'Ouvrir le PDF',
    menuDownload: 'Telecharger la carte',
    page: 'Page',
    featuresTitle: 'Grillades, riz et tapas',
    features: [
      {
        icon: Flame,
        title: 'Grillades au feu',
        text: 'Parrillada, filets, cotes et legumes de saison avec garniture au choix.',
      },
      {
        icon: Beef,
        title: 'Riz sur reservation',
        text: 'Paella au poulet, fruits de mer, lapin, thon ou mixte preparee sur demande.',
      },
      {
        icon: Wine,
        title: 'Tapas traditionnelles',
        text: 'Marinera, matrimonio, amandes, anchois, salades et classiques de comptoir.',
      },
    ],
    vibeTitle: 'Un lieu ou rester un peu plus',
    vibeText:
      'La Cueva associe le caractere d une brasserie traditionnelle a une presence visuelle actuelle: bois, feu, assiettes genereuses et carte a partager.',
    stats: [
      ['6', 'pages de carte'],
      ['30+', 'plats principaux'],
      ['3', 'langues sur le site'],
    ],
    contactTitle: 'Reservez votre table',
    contactText:
      'Appelez ou ecrivez pour confirmer les horaires, les disponibilites et les riz avec reservation prealable.',
    address: 'Restaurante La Cueva',
    schedule: 'Midi et soir',
    phone: '+34 000 000 000',
    footer: 'Grillades & Riz La Cueva',
  },
};

const menuPages = Array.from({ length: 6 }, (_, index) => ({
  src: `/menu-page-${index + 1}.png`,
  number: index + 1,
}));

function App() {
  const [language, setLanguage] = useState('es');
  const [path, setPath] = useState(window.location.pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const t = copy[language];
  const isMenuPage = path === '/carta';

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (nextPath, sectionId) => {
    const nextUrl = sectionId ? `${nextPath}#${sectionId}` : nextPath;
    window.history.pushState({}, '', nextUrl);
    setPath(nextPath);
    setDrawerOpen(false);

    window.setTimeout(() => {
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  const menuItems = useMemo(
    () => [
      { href: '/', label: t.nav[0], path: '/' },
      { href: '/carta', label: t.nav[1], path: '/carta' },
      { href: '/#vibe', label: t.nav[2], path: '/', section: 'vibe' },
      { href: '/#contact', label: t.nav[3], path: '/', section: 'contact' },
    ],
    [t],
  );

  return (
    <main className="site-shell">
      <Header
        drawerOpen={drawerOpen}
        isMenuPage={isMenuPage}
        language={language}
        menuItems={menuItems}
        navigate={navigate}
        setDrawerOpen={setDrawerOpen}
        setLanguage={setLanguage}
        t={t}
      />

      {isMenuPage ? <MenuPage t={t} /> : <Landing navigate={navigate} t={t} />}

      <footer>
        <span>{t.footer}</span>
        <span>2026</span>
      </footer>
    </main>
  );
}

function Header({ drawerOpen, isMenuPage, language, menuItems, navigate, setDrawerOpen, setLanguage, t }) {
  return (
    <>
      <header className="topbar">
        <a
          className="brand"
          href="/"
          aria-label="La Cueva"
          onClick={(event) => {
            event.preventDefault();
            navigate('/');
          }}
        >
          <img src="/logo-la-cueva.png" alt="" />
          <span>La Cueva</span>
        </a>

        <div className="header-actions">
          <div className="language-switcher" aria-label="Language selector">
            <Languages size={17} aria-hidden="true" />
            {languages.map((item) => (
              <button
                className={item.code === language ? 'active' : ''}
                key={item.code}
                onClick={() => setLanguage(item.code)}
                type="button"
                aria-pressed={item.code === language}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label={t.menuButton}
            aria-expanded={drawerOpen}
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </header>

      <div className={`drawer-backdrop ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer ${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen}>
        <div className="drawer-head">
          <img src="/logo-la-cueva.png" alt="" />
          <button type="button" onClick={() => setDrawerOpen(false)} aria-label={t.closeMenu}>
            <X size={22} />
          </button>
        </div>

        <nav className="drawer-nav" aria-label="Main navigation">
          {menuItems.map((item) => (
            <a
              className={item.path === '/carta' && isMenuPage ? 'active' : ''}
              href={item.href}
              key={item.href}
              onClick={(event) => {
                event.preventDefault();
                navigate(item.path, item.section);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

function Landing({ navigate, t }) {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <div className="hero-actions">
            <a
              className="button primary"
              href="/carta"
              onClick={(event) => {
                event.preventDefault();
                navigate('/carta');
              }}
            >
              <MenuIcon size={18} />
              {t.primaryCta}
            </a>
            <a className="button secondary" href="#contact">
              <CalendarDays size={18} />
              {t.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="La Cueva brand stamp">
          <img src="/logo-la-cueva.png" alt="La Cueva logo" />
          <div>
            <span>{t.openToday}</span>
            <strong>{t.address}</strong>
          </div>
        </div>
      </section>

      <section className="features" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="features-title">{t.featuresTitle}</h2>
        </div>
        <div className="feature-grid">
          {t.features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature" key={feature.title}>
                <Icon size={28} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="vibe" id="vibe">
        <div>
          <p className="eyebrow">{t.nav[2]}</p>
          <h2>{t.vibeTitle}</h2>
          <p>{t.vibeText}</p>
        </div>
        <div className="stats">
          {t.stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <Contact t={t} />
    </>
  );
}

function MenuPage({ t }) {
  return (
    <section className="menu-section menu-view" id="menu" aria-labelledby="menu-title">
      <div className="section-heading menu-heading">
        <div>
          <p className="eyebrow">{t.menuKicker}</p>
          <h1 id="menu-title">{t.menuTitle}</h1>
        </div>
        <p>{t.menuText}</p>
        <div className="menu-actions">
          <a className="button secondary" href="/Cartas La Cueva 6-26.pdf" target="_blank" rel="noreferrer">
            <ArrowUpRight size={18} />
            {t.menuPdf}
          </a>
          <a className="button ghost" href="/Cartas La Cueva 6-26.pdf" download>
            {t.menuDownload}
          </a>
        </div>
      </div>

      <div className="menu-pages">
        {menuPages.map((page) => (
          <figure className="menu-page" key={page.src}>
            <img src={page.src} alt={`${t.page} ${page.number}`} loading={page.number > 2 ? 'lazy' : 'eager'} />
            <figcaption>
              {t.page} {page.number}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">{t.nav[3]}</p>
        <h2 id="contact-title">{t.contactTitle}</h2>
        <p>{t.contactText}</p>
      </div>
      <div className="contact-panel">
        <a href="tel:+34000000000">
          <Phone size={20} />
          <span>{t.phone}</span>
        </a>
        <div>
          <MapPin size={20} />
          <span>{t.address}</span>
        </div>
        <div>
          <Clock3 size={20} />
          <span>{t.schedule}</span>
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
