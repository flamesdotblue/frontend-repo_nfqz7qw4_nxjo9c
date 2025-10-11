import { CheckCircle2, KeyRound, ShieldCheck, Server } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="bg-[#070a12] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <div className="text-xs uppercase tracking-wider text-white/60">Backed by standards</div>
          <div className="mt-1 text-sm text-white/80">Security that’s verifiable and compliant.</div>
        </div>

        <div className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          <Badge icon={ShieldCheck} label="WebAuthn" />
          <Badge icon={KeyRound} label="FIDO2" />
          <Badge icon={Server} label="SOC 2 Ready" />
          <Badge icon={CheckCircle2} label="GDPR" />
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
      <Icon className="h-4 w-4 text-cyan-300" />
      <span>{label}</span>
    </div>
  );
}
