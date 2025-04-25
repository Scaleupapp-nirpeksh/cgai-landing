import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-gray-100 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Creator Genius AI</p>
        <nav className="flex gap-6">
          <Link href="/support">Support</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
