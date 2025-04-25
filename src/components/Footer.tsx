import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navigation = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#' },
      { name: 'Roadmap', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '/support' },
      { name: 'Documentation', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    legal: [
      { name: 'Terms', href: '/terms' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Cookies', href: '#' },
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com/creatorgenius_ai', icon: '/twitter.svg' },
      { name: 'Instagram', href: 'https://instagram.com/creatorgenius_ai', icon: '/instagram.svg' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/creatorgenius', icon: '/linkedin.svg' },
      { name: 'YouTube', href: 'https://youtube.com/@creatorgenius', icon: '/youtube.svg' },
    ],
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Left column with logo and description */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-3">
              <Image 
                src="/CG-AI Logo.png" 
                alt="Creator Genius AI" 
                width={40} 
                height={40} 
              />
              <span className="text-lg font-bold text-slate-900">Creator Genius AI</span>
            </div>
            <p className="text-slate-500 text-base max-w-xs">
              The AI-powered platform helping creators ideate, produce, and distribute content 10× faster.
            </p>
            <div className="flex space-x-5">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-slate-400 hover:text-slate-500">
                  <span className="sr-only">{item.name}</span>
                  <img src={item.icon} alt={item.name} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Right columns with links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
                  Product
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-500 hover:text-brandA transition">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-500 hover:text-brandA transition">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-500 hover:text-brandA transition">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-base text-slate-500 hover:text-brandA transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter subscription */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="max-w-md">
              <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-base text-slate-500">
                Get product updates, company news, and more.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 px-4 py-2 rounded-l-md border border-slate-300 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brandA/20 focus:border-transparent sm:max-w-xs"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-brandA hover:bg-brandA/90 border border-transparent rounded-r-md py-2 px-4 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-brandA focus:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-slate-500">
            &copy; {currentYear} Creator Genius AI. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0 text-sm text-slate-400">
            Made with ❤️ for creators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}