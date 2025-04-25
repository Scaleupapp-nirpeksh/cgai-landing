'use client';
import { useState } from "react";


export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] =
    useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    const res = await fetch("/api/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setState(res.ok ? "done" : "error");
    if (res.ok) setEmail("");
  }

  return (
    <section id="waitlist" className="py-32 bg-gradient-to-b from-white to-slate-50">
       <div className="max-w-lg mx-auto p-10 bg-white/50 backdrop-blur-glass rounded-glass border border-white/40 shadow-2xl reveal">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Get early access 👇
        </h2>
        <p className="text-slate-600 mb-8 text-center">
          Be first when we land on TestFlight & Play Store.
        </p>

        <form
          onSubmit={submit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            required
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full border border-slate-300 shadow-inner placeholder:text-slate-400"
          />
          <button
            disabled={state === "loading"}
            className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-brandA to-brandB hover:saturate-150 disabled:opacity-60 transition"
          >
            {state === "loading" ? "Joining…" : "Join"}
          </button>
        </form>

        {state === "done" && (
          <p className="text-green-600 mt-4 text-center">
            🎉 You’re on the list — watch your inbox!
          </p>
        )}
        {state === "error" && (
          <p className="text-red-600 mt-4 text-center">
            Something went wrong. Try again?
          </p>
        )}
      </div>
    </section>
  );
}
