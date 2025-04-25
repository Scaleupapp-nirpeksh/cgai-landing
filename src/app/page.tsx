// src/app/page.tsx
import Hero from "@/src/components/Hero";
import Features from "@/src/components/Features";
import WaitlistForm from "@/src/components/WaitlistForm";
import Footer from "@/src/components/Footer";
import RevealClient from "@/src/app/reveal-client";

export default function Home() {
  return (
    <>
       <RevealClient /> 
      <Hero />
      <Features />
      <WaitlistForm />
      <Footer />
    </>
  );
}
