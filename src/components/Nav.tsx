import { useState, useEffect } from 'react';
import { T, type Lang } from '../i18n/translations';

interface Props {
  lang: Lang;
}

export default function Nav({ lang: initialLang }: Props) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const t = T[lang];

  const handleLangChange = (l: Lang) => {
    setLang(l);
    // Update URL for SEO-friendly i18n
    const paths: Record<Lang, string> = { uz: '/', ru: '/ru', en: '/en' };
    window.location.href = paths[l];
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          {scrolled ? (
            <img src="/logo-light.png" alt="Ezzyshop" style={{ height: '34px', width: 'auto' }} />
          ) : (
            <img src="/logo-dark.png" alt="Ezzyshop" style={{ height: '34px', width: 'auto' }} />
          )}
        </a>

        <div className="nav-links">
          <a className="nav-link" href="#features">{t.nav.features}</a>
          <a className="nav-link" href="#how">{t.nav.how}</a>
          <a className="nav-link" href="#pricing">{t.nav.pricing}</a>
          <a className="nav-link" href="#screens">{t.nav.demo}</a>
        </div>

        <div className="nav-right">
          <div className="lang-switcher">
            {(['uz', 'ru', 'en'] as Lang[]).map((l) => (
              <button
                key={l}
                className={`lang-btn${lang === l ? ' active' : ''}`}
                onClick={() => handleLangChange(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="/signup" className="btn btn-ghost btn-sm">{t.cta1}</a>
        </div>
      </div>
    </nav>
  );
}
