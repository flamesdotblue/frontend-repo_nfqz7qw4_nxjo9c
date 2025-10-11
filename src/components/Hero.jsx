import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#05060a] text-white">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 md:flex-row md:py-24">
        {/* Copy deck */}
        <div className="z-10 w-full md:w-1/2">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Passkeys • Face/Touch ID • WebAuthn
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Auth that disappears.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Passwordless by default. Ship biometric logins with a single line — no passwords, no friction,
            just trust. Designed for developers, loved by users.
          </p>

          <form onSubmit={onSubmit} className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
            <input
              aria-label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 transition focus:border-cyan-400/50 focus:bg-white/10"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              {submitted ? 'Added to waitlist' : 'Get early access'}
            </button>
          </form>
          <div className="mt-3 text-sm text-white/60">
            One-line setup. SOC 2 friendly. No passwords to breach.
          </div>
        </div>

        {/* 3D visual */}
        <div className="relative w-full md:w-1/2">
          <div className="relative h-[380px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />

            {/* soft gradient overlay to blend scene with page */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
