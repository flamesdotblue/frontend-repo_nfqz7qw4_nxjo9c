import Hero from './components/Hero';
import Features from './components/Features';
import CodeSnippet from './components/CodeSnippet';
import TrustBar from './components/TrustBar';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05060a] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-white/60">© {new Date().getFullYear()} Disappear Auth</div>
        <div className="text-sm text-white/60">“Auth that disappears.”</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#05060a]">
      <header className="relative z-20 border-b border-white/10 bg-[#05060a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500" />
            <span className="font-medium">Disappear</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#" className="hover:text-white">Product</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="rounded-lg bg-white/5 px-3 py-1.5 ring-1 ring-white/10 hover:bg-white/10">Get access</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TrustBar />
        <Features />
        <CodeSnippet />
      </main>

      <Footer />
    </div>
  );
}
