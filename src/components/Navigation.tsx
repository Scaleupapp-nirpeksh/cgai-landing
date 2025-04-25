'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/CG-AI Logo.png"
            alt="Creator Genius AI Logo"
            width={36}
            height={36}
          />
          <span className="font-bold text-xl">Creator Genius</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="#features" 
            className="text-slate-700 hover:text-brandA transition"
          >
            Features
          </Link>
          <Link 
            href="#waitlist" 
            className="text-slate-700 hover:text-brandA transition"
          >
            Waitlist
          </Link>
          <Link 
            href="/support" 
            className="text-slate-700 hover:text-brandA transition"
          >
            Support
          </Link>
          
          {/* Primary CTA */}
          <Link
            href="#waitlist"
            className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-brandA to-brandB text-white font-medium"
          >
            Join Now
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-slate-700" />
          ) : (
            <Menu size={24} className="text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-2 space-y-1">
            <Link 
              href="#features" 
              className="block px-3 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#waitlist" 
              className="block px-3 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Waitlist
            </Link>
            <Link 
              href="/support" 
              className="block px-3 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            <Link
              href="#waitlist"
              className="block mt-2 px-3 py-2 text-center rounded-lg bg-gradient-to-r from-brandA to-brandB text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}