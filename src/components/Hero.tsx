'use client';
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-40">
      {/* radial spotlight */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* animated blob */}
      <div
        className="absolute -top-40 -left-28 w-[450px] h-[450px] bg-gradient-to-br from-brandA to-brandB opacity-20 rounded-full blob-spin"
        style={{ borderRadius: "42% 58% 35% 65% / 42% 33% 67% 58%" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center text-center gap-8 reveal">
        <Image
          src="/CG-AI Logo.png"
          alt="Creator Genius AI logo"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-br from-brandA to-brandB text-transparent bg-clip-text">
          Create Smarter,
          <br className="hidden md:block" /> Not Harder
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl text-slate-700/90">
          AI that ideates, scripts, optimises&nbsp;and schedules — so you ship
          content <em>10× faster</em>.
        </p>

        <a
          href="#waitlist"
          className="relative inline-flex items-center justify-center px-10 py-4 font-semibold text-white rounded-full bg-gradient-to-r from-brandA to-brandB hover:saturate-150 transition"
        >
          Join the wait-list →
          <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 hover:opacity-100 transition" />
        </a>
      </div>
    </section>
  );
}
