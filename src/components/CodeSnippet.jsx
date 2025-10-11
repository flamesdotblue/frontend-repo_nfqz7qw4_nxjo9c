import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const snippets = {
  javascript: `// 1-line web integration
import { init } from '@disappear/auth';
init({ projectId: 'demo_123' }); // adds biometric login to your app`,
  react: `// In your root component
import { AuthProvider } from '@disappear/auth/react';

export default function App() {
  return (
    <AuthProvider projectId="demo_123">{/* biometric login just works */}</AuthProvider>
  );
}`,
  curl: `# Exchange a passkey assertion for a session
curl -X POST "$BACKEND/auth/callback" \\
  -H 'Content-Type: application/json' \\
  -d '{"assertion": "<webauthn-assertion>"}'`,
};

const tabs = [
  { key: 'javascript', label: 'JavaScript' },
  { key: 'react', label: 'React' },
  { key: 'curl', label: 'cURL' },
];

export default function CodeSnippet() {
  const [active, setActive] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const code = snippets[active];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <section className="relative bg-[#05060a] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">One line. That’s it.</h2>
          <p className="mt-3 text-white/70">Drop it in and ship biometric logins today.</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-3 flex items-center justify-between">
            <div className="inline-flex rounded-lg bg-white/5 p-1 ring-1 ring-white/10">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`rounded-md px-3 py-1.5 text-sm transition ${
                    active === t.key ? 'bg-cyan-500/20 text-cyan-200' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <button
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-sm text-white/80 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copy
                </>
              )}
            </button>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0a0f1a] to-[#0b1220]">
            <div className="flex items-center gap-1 border-b border-white/10 px-4 py-2 text-white/60">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs">snippet.{active}</span>
            </div>
            <pre className="overflow-auto p-4 text-sm leading-relaxed text-cyan-100/90">
<code className="font-mono">{code}</code>
            </pre>
            <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
