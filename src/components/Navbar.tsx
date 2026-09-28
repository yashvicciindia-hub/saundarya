import { Fragment, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import QuickActions from './QuickActions';
import { ingredients } from '@/data/ingredients';
import logo from '@/assets/saundarya-veda-logo.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Applications', path: '/applications' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

function IngredientsDropdown({ isDark, active, pathname }: { isDark: boolean; active: boolean; pathname: string }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const openMenu = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeMenuSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  return (
    <div ref={wrapperRef} className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenuSoon}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="ingredients-menu"
        className={`relative inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
          active || open ? 'text-brand-pink-deep' : 'hover:text-brand-pink-deep'
        }`}
      >
        Ingredients
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        {active && (
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand-pink-deep rounded-full" />
        )}
      </button>

      {open && (
        <div id="ingredients-menu" className="absolute left-1/2 top-full z-[70] -translate-x-1/2 pt-2">
          <div
            className={`w-[30rem] rounded-2xl border p-3 shadow-[0_18px_48px_rgba(41,35,38,0.18)] ${
              isDark
                ? 'bg-[#211A1D] text-[#FFF7F9] border-[#F8DDE5]/15'
                : 'bg-white text-brand-charcoal border-brand-pink/50'
            }`}
          >
            <div className="flex items-center gap-2 px-3 pt-2 pb-3">
              <Sparkles className="w-4 h-4 text-brand-pink-deep" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-pink-deep">
                Explore Ingredients
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-x-1 gap-y-0.5 max-h-[22rem] overflow-y-auto">
              {ingredients.map((ingredient) => (
                <li key={ingredient.slug}>
                  <Link
                    to={`/ingredients/${ingredient.slug}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                      isDark ? 'hover:bg-white/10' : 'hover:bg-brand-pink-light'
                    } hover:text-brand-pink-deep`}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink-deep/70" />
                    <span className="truncate">{ingredient.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/ingredients"
              onClick={() => setOpen(false)}
              className={`mt-3 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-brand-pink-deep transition-colors ${
                isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-brand-pink-light hover:bg-brand-pink/60'
              }`}
            >
              View All Ingredients
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileIngredientsMenu({ active, onNavigate }: { active: boolean; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors ${
          active ? 'text-brand-pink-deep bg-brand-pink-light' : 'hover:bg-brand-pink-light/60'
        }`}
      >
        Ingredients
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="ml-4 mt-1 mb-2 border-l border-brand-pink/50 pl-3 flex flex-col">
          {ingredients.map((ingredient) => (
            <Link
              key={ingredient.slug}
              to={`/ingredients/${ingredient.slug}`}
              onClick={onNavigate}
              className="px-3 py-2.5 text-sm rounded-lg hover:bg-brand-pink-light/60 hover:text-brand-pink-deep"
            >
              {ingredient.name}
            </Link>
          ))}
          <Link
            to="/ingredients"
            onClick={onNavigate}
            className="mt-1 px-3 py-2.5 text-sm font-semibold text-brand-pink-deep inline-flex items-center gap-1.5"
          >
            View All Ingredients <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const syncTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    window.addEventListener('themechange', syncTheme);
    return () => window.removeEventListener('themechange', syncTheme);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleQuoteClick = () => {
    navigate('/request-quote');
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isDark
          ? `${scrolled ? 'bg-[#211A1D]/95' : 'bg-[#171315]/85'} text-[#FFF7F9] border-[#F8DDE5]/15`
          : `${scrolled ? 'bg-white/95' : 'bg-white/80'} text-brand-charcoal border-brand-charcoal/10`
      } backdrop-blur-md shadow-[0_1px_12px_rgba(41,35,38,0.08)]`}> 
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0" aria-label="Saundarya Veda - Home">
              <img
                src={logo}
                alt="Saundarya Veda logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-lg object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Fragment key={link.path}>
                <Link
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive(link.path)
                      ? 'text-brand-pink-deep'
                      : 'hover:text-brand-pink-deep'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand-pink-deep rounded-full" />
                  )}
                </Link>
                {link.path === '/' && (
                  <IngredientsDropdown isDark={isDark} active={isActive('/ingredients')} pathname={location.pathname} />
                )}
                </Fragment>
              ))}
              <Link
                to="/become-a-partner"
                className="ml-2 px-4 py-2 text-sm font-medium border border-brand-pink-deep/30 rounded-full hover:border-brand-pink-deep hover:bg-brand-pink-light transition-all duration-200"
              >
                Become a Partner
              </Link>
              <button
                onClick={handleQuoteClick}
                className="ml-2 px-5 py-2 text-sm font-medium text-[#171315] bg-brand-pink-deep rounded-full hover:bg-brand-pink-deep/90 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Request a Quote
              </button>
              <QuickActions />
              <ThemeToggle compact />
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-brand-charcoal/40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          <div className={`absolute right-0 top-0 bottom-0 w-full max-w-sm shadow-2xl animate-slide-in flex flex-col ${isDark ? 'bg-[#211A1D] text-[#FFF7F9]' : 'bg-white text-brand-charcoal'}`}>
            <div className="flex items-center justify-between h-16 px-5 border-b border-brand-pink/40">
              <Link to="/" className="flex items-center" aria-label="Saundarya Veda - Home" onClick={() => setIsOpen(false)}>
                <img
                  src={logo}
                  alt="Saundarya Veda logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-lg object-contain"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Fragment key={link.path}>
                <Link
                  to={link.path}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'text-brand-pink-deep bg-brand-pink-light'
                      : 'hover:bg-brand-pink-light/60'
                  }`}
                >
                  {link.label}
                </Link>
                {link.path === '/' && (
                  <MobileIngredientsMenu active={isActive('/ingredients')} onNavigate={() => setIsOpen(false)} />
                )}
                </Fragment>
              ))}
              <Link
                to="/become-a-partner"
                className="mt-2 px-4 py-3 text-base font-medium border border-brand-pink-deep/30 rounded-lg text-center"
              >
                Become a Partner
              </Link>
              <Link
                to="/request-quote"
                className="mt-2 px-4 py-3 text-base font-medium text-[#171315] bg-brand-pink-deep rounded-lg text-center"
              >
                Request a Quote
              </Link>
              <div className="mt-5 flex items-center justify-between border-t border-brand-pink/30 pt-5">
                <span className="text-sm text-brand-text-secondary">Appearance</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
