'use client';
import { Sparkles, Repeat, TrendingUp } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Instant Ideation", text: "Five viral ideas in 10 s." },
  { icon: Repeat,   title: "One-Click Repurpose", text: "YouTube → Reels → TikTok in seconds." },
  { icon: TrendingUp, title: "SEO & Timing Magic", text: "Rank + reach the right audience." },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto grid gap-10 px-4 md:grid-cols-3">
        {features.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-3xl p-8 bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition reveal"
          >
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brandA/10 mb-6">
              <Icon size={28} className="text-brandB" />
            </span>
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
