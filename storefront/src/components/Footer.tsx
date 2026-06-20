import Link from 'next/link';
import { Leaf } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50 py-16 border-t border-emerald-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Leaf className="w-6 h-6 text-emerald-400" />
              <span className="text-2xl font-serif tracking-wide text-white">Neer</span>
            </Link>
            <p className="text-emerald-200/80 font-light text-sm leading-relaxed mb-6">
              Pure nature, pure you. We craft organic, chemical-free beauty products that bring traditional Ayurvedic wisdom to modern routines.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-800 transition-colors text-emerald-400 hover:text-white">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-800 transition-colors text-emerald-400 hover:text-white">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-800 transition-colors text-emerald-400 hover:text-white">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Home</Link></li>
              <li><Link href="/shop" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Shop All</Link></li>
              <li><Link href="/about" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Our Story</Link></li>
              <li><Link href="#" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6">Customer Care</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Shipping Policy</Link></li>
              <li><Link href="#" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Returns & Refunds</Link></li>
              <li><Link href="#" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">FAQs</Link></li>
              <li><Link href="#" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6">Join Our Newsletter</h3>
            <p className="text-emerald-200/80 font-light text-sm leading-relaxed mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-emerald-900 border border-emerald-800 text-white placeholder-emerald-400/50 px-4 py-3 rounded-sm focus:outline-none focus:border-emerald-500 text-sm w-full"
              />
              <button 
                type="button"
                className="bg-emerald-400 text-emerald-950 font-medium px-4 py-3 rounded-sm hover:bg-emerald-300 transition-colors text-sm uppercase tracking-wider"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-emerald-400/60 text-sm font-light">
            &copy; {new Date().getFullYear()} Neer Natural Care. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-light text-emerald-400/60">
            <Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
