'use client';
import { Sparkles, Repeat, TrendingUp, Zap, Share2, Clock } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Instant Ideation", text: "Generate five viral content ideas in just 10 seconds with our AI engine." },
  { icon: Repeat, title: "One-Click Repurpose", text: "Transform YouTube videos into Instagram Reels and TikToks with a single click." },
  { icon: TrendingUp, title: "SEO & Timing Magic", text: "Find optimal posting times and enhance your content with SEO that helps you rank higher." },
  { icon: Zap, title: "AI Script Assistant", text: "Generate engaging scripts based on your style and audience preferences." },
  { icon: Share2, title: "Multi-Platform Publish", text: "Schedule and publish to all your social platforms from one dashboard." },
  { icon: Clock, title: "Smart Scheduling", text: "AI-powered content calendar for maximum engagement." },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">
      {/* Section heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-brandA to-brandB text-transparent bg-clip-text inline-block">
          Supercharge Your Content Creation
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Our AI-powered tools help creators focus on creativity while handling the technical aspects.
        </p>
      </div>
      
      {/* Features grid */}
      <div className="max-w-6xl mx-auto grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition reveal"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brandA/10 mb-4">
              <Icon size={24} className="text-brandB" />
            </span>
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-slate-600">{text}</p>
          </article>
        ))}
      </div>
      
      {/* CTA Banner */}
      <div className="max-w-5xl mx-auto mt-16 px-4">
        <div className="rounded-xl bg-gradient-to-r from-brandA to-brandB p-8 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to transform your workflow?</h3>
              <p className="text-white/90">Join our waitlist today.</p>
            </div>
            
            <a 
              href="#waitlist" 
              className="px-6 py-3 rounded-full font-semibold text-brandA bg-white shadow-md hover:shadow-lg transition"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}