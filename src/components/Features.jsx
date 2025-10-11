import { Fingerprint, Lock, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: 'Biometrics-first',
    desc: 'Passkeys, Face ID, and Touch ID out of the box with WebAuthn compatibility.',
  },
  {
    icon: Zap,
    title: 'One-line integration',
    desc: 'Drop-in SDKs for web and mobile. Go live in minutes, not sprints.',
  },
  {
    icon: Lock,
    title: 'Zero passwords to breach',
    desc: 'Phishing-resistant, device-bound credentials. No secrets at rest.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'SOC 2 friendly controls, audit logs, and regional data residency.',
  },
];

export default function Features() {
  return (
    <section className="relative bg-[#070a12] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Everything you need to go passwordless</h2>
          <p className="mt-3 text-white/70">
            Built for modern stacks — secure by design, delightful by default.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/7.5">
              <div className="mb-4 inline-flex rounded-xl bg-white/5 p-2 text-cyan-300 ring-1 ring-white/10">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
