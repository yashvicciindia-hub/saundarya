import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '@/assets/saundarya-veda-logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4" aria-label="Saundarya Veda - Home">
              <img
                src={logo}
                alt="Saundarya Veda logo"
                width={112}
                height={112}
                loading="lazy"
                className="h-28 w-28 rounded-xl object-contain"
              />
            </Link>
            <p className="font-serif text-xl font-semibold mb-1">Saundarya Veda</p>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Beauty &amp; Cosmetic Ingredients for B2B Manufacturers
            </p>
            <Link to="/#insights" className="mt-5 inline-flex items-center gap-1.5 text-sm text-brand-pink hover:text-white transition-colors">Explore all insights <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-4 text-brand-pink">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-white/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-sm text-white/60 hover:text-white transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ingredients */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-4 text-brand-pink">Ingredients</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ingredients" className="text-sm text-white/60 hover:text-white transition-colors">
                  All Ingredients
                </Link>
              </li>
              <li>
                <Link to="/ingredients?category=Natural+%26+Botanical+Extracts" className="text-sm text-white/60 hover:text-white transition-colors">
                  Natural &amp; Botanical
                </Link>
              </li>
              <li>
                <Link to="/ingredients?category=Cosmetic+Actives" className="text-sm text-white/60 hover:text-white transition-colors">
                  Cosmetic Actives
                </Link>
              </li>
              <li>
                <Link to="/ingredients?category=Oils+%26+Butters" className="text-sm text-white/60 hover:text-white transition-colors">
                  Oils &amp; Butters
                </Link>
              </li>
              <li>
                <Link to="/ingredients?category=Hydration+%26+Moisturizing+Ingredients" className="text-sm text-white/60 hover:text-white transition-colors">
                  Hydration
                </Link>
              </li>
            </ul>
          </div>

          {/* B2B */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-4 text-brand-pink">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/become-a-partner" className="text-sm text-white/60 hover:text-white transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-sm text-white/60 hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-pink" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=13%2C%20Institutional%20Area%2C%20Lodhi%20Road%2C%20New%20Delhi-110003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  13, Institutional Area,<br />Lodhi Road,<br />New Delhi-110003
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-brand-pink" />
                <span><a href="tel:01144101999" className="hover:text-white">011 44101999</a><br /><a href="tel:9211227467" className="hover:text-white">9211227467</a></span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-brand-pink" />
                <a href="mailto:globalexpressgroup@gmail.com" className="break-all hover:text-white">globalexpressgroup@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-white/50">
            &copy; {year} Saundarya Veda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
