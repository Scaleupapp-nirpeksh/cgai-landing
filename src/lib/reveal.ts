// Tiny intersection-observer helper (no deps)
export function observeReveal(selector = ".reveal") {
    if (typeof window === "undefined") return;
    const els = Array.from(document.querySelectorAll(selector));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("shown")),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
  }
  