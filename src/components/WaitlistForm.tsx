'use client';
import { useState } from "react";
import { ArrowRight, CheckCircle, XCircle, Loader2 } from "lucide-react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] =
    useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
      setErrorMessage("Please enter a valid email address");
      setState("error");
      return;
    }
    
    setState("loading");
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to join waitlist");
      }
      
      setState("done");
      setEmail("");
      setErrorMessage("");
    } catch (error) {
      setState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="waitlist" className="py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white z-0"></div>
      <div className="absolute inset-0 opacity-5 bg-[url('/grid-pattern.svg')] z-0"></div>
      
      {/* Blob decorations */}
      <div className="absolute bottom-1/3 -left-20 w-60 h-60 bg-brandA/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brandB/10 rounded-full blur-3xl z-0"></div>
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left side content */}
        <div className="lg:w-1/2 relative z-10 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="gradient-text">Waitlist</span>
          </h2>
          
          <p className="text-lg text-slate-700 mb-8">
            Be among the first to experience Creator Genius AI. Early access members will receive:
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Priority access to the platform",
              "3 months free on our Pro plan",
              "Exclusive creator workshops",
              "Direct access to our founding team"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brandA/10 flex items-center justify-center mt-0.5">
                  <CheckCircle size={16} className="text-brandA" />
                </div>
                <span className="ml-3 text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center text-sm text-slate-500">
            <svg className="w-5 h-5 mr-2 text-brandA" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            We care about your data. Read our <a href="/privacy" className="underline hover:text-brandA transition">Privacy Policy</a>.
          </div>
        </div>
        
        {/* Right side form */}
        <div className="lg:w-1/2 relative z-10 reveal reveal-delay-2">
          <div className="card-glass p-8 sm:p-10">
            <h3 className="text-2xl font-bold mb-2">Get Early Access</h3>
            <p className="text-slate-600 mb-6">
              Join our exclusive waitlist and be the first to know when we launch.
            </p>
            
            <form onSubmit={submit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 shadow-sm focus:ring-2 focus:ring-brandA/20 focus:border-brandA outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-brandA to-brandB hover:saturate-150 disabled:opacity-70 transition flex items-center justify-center"
              >
                {state === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin mr-2" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
            
            {state === "done" && (
              <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg flex items-start">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                <div className="ml-3">
                  <p className="text-green-800 font-medium">You're on the list!</p>
                  <p className="text-green-700 text-sm">We'll notify you as soon as we launch. Keep an eye on your inbox!</p>
                </div>
              </div>
            )}
            
            {state === "error" && (
              <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-lg flex items-start">
                <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <div className="ml-3">
                  <p className="text-red-800 font-medium">Something went wrong</p>
                  <p className="text-red-700 text-sm">{errorMessage || "Please try again later."}</p>
                </div>
              </div>
            )}
            
            {/* Social proof */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Trusted by creators from:</p>
              <div className="flex flex-wrap gap-4 justify-between items-center opacity-70">
                <div className="grayscale hover:grayscale-0 transition">
                  <img src="/youtube-logo.svg" alt="YouTube" className="h-6" />
                </div>
                <div className="grayscale hover:grayscale-0 transition">
                  <img src="/instagram-logo.svg" alt="Instagram" className="h-6" />
                </div>
                <div className="grayscale hover:grayscale-0 transition">
                  <img src="/tiktok-logo.svg" alt="TikTok" className="h-6" />
                </div>
                <div className="grayscale hover:grayscale-0 transition">
                  <img src="/twitch-logo.svg" alt="Twitch" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}