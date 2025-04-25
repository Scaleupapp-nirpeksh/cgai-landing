'use client';
import Image from "next/image";
import { MouseEvent, useEffect, useRef, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  
  // Parallax effect for mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    if (!heroRef.current) return;
    
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    setMousePosition({
      x: (x / width - 0.5) * 20,
      y: (y / height - 0.5) * 20
    });
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative isolate overflow-hidden pt-24 sm:pt-32 lg:pt-40 pb-36 sm:pb-40 lg:pb-48"
    >
      {/* Interactive background elements */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none z-0" />
      
      {/* Dynamic blobs */}
      <div
        className="absolute -top-40 -left-28 w-[450px] h-[450px] bg-gradient-to-br from-brandA/40 to-brandB/40 rounded-full blur-2xl opacity-20 blob-spin"
        style={{ 
          borderRadius: "42% 58% 35% 65% / 42% 33% 67% 58%",
          transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)` 
        }}
      />
      
      <div
        className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-gradient-to-tl from-brandB/30 to-brandC/30 rounded-full blur-xl opacity-20 blob-spin"
        style={{ 
          borderRadius: "62% 38% 55% 45% / 52% 63% 37% 48%",
          animationDirection: "reverse",
          animationDuration: "45s",
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` 
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-32 right-1/4 w-6 h-6 bg-brandA/20 rounded-full float" 
           style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-brandB/20 rounded-full float" 
           style={{ animationDelay: "1.2s" }} />
      <div className="absolute top-1/3 left-1/5 w-4 h-4 bg-brandC/20 rounded-full float" 
           style={{ animationDelay: "0.8s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Logo with glow effect */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-brandA/40 to-brandB/40 rounded-full blur-xl pulse-glow"></div>
          <Image
            src="/CG-AI Logo.png"
            alt="Creator Genius AI logo"
            width={180}
            height={180}
            priority
            className="relative float"
          />
        </div>
        
        {/* Heading with gradient and animation */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 reveal">
          <span className="inline-block gradient-text">Create Smarter,</span>
          <br className="hidden md:block" />
          <span className="inline-block gradient-text">Not Harder</span>
        </h1>
        
        {/* Subheading with improved typography */}
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-slate-700/90 mb-10 reveal reveal-delay-1">
          AI that ideates, scripts, optimises&nbsp;and schedules — so you ship
          content <em className="font-semibold text-brandA">10× faster</em>.
        </p>

        {/* CTA button with enhanced styling */}
        <a
          href="#waitlist"
          className="button-primary group reveal reveal-delay-2"
        >
          <span className="flex items-center">
            Join the wait-list
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        
        {/* Badges/Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 reveal reveal-delay-3">
          <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <svg className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Fast Onboarding</span>
          </div>
          <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <svg className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">No Credit Card</span>
          </div>
          <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <svg className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Cancel Anytime</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-slate-500 mb-2">Scroll to explore</span>
        <svg className="w-6 h-6 text-brandA" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}