import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0c10] overflow-hidden">

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(248,171,60,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(248,171,60,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Corner accents */}
      <div className="pointer-events-none absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-amber-400/50" />
      <div className="pointer-events-none absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-amber-400/50" />
      <div className="pointer-events-none absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-amber-400/50" />
      <div className="pointer-events-none absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-amber-400/50" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-7">

        {/* Spinner */}
        <div className="relative flex items-center justify-center" style={{ width: 100, height: 100 }}>
          {/* Outer arcs */}
          <div
            className="absolute rounded-full"
            style={{
              width: 100, height: 100,
              border: "1.5px solid transparent",
              borderTopColor: "rgba(248,171,60,0.9)",
              borderRightColor: "rgba(248,171,60,0.2)",
              animation: "spin 1.4s linear infinite",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 100, height: 100,
              border: "1.5px solid transparent",
              borderBottomColor: "rgba(248,171,60,0.5)",
              animation: "spin 1.4s linear infinite reverse",
            }}
          />
          {/* Middle ring */}
          <div
            className="absolute rounded-full border"
            style={{
              width: 70, height: 70,
              borderColor: "rgba(248,171,60,0.12)",
              animation: "spin 6s linear infinite reverse",
            }}
          />
          {/* Logo */}
          <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[#0f1116] border border-white/[0.08]">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={34}
              height={34}
              className="object-contain"
              loading="eager"
              priority
            />
          </div>
        </div>

        {/* Label + dots */}
        <div className="flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-2.5">
            <div className="h-px w-6 bg-gradient-to-r from-transparent to-amber-500/50" />
            <span
              className="text-[10px] tracking-[0.45em] uppercase text-amber-400/75"
              style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}
            >
              SHAZMGC
            </span>
            <div className="h-px w-6 bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-amber-400/50"
                style={{ animation: `pulse 1.4s ease-in-out ${i * 0.18}s infinite` }}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative h-px w-40 bg-white/5 overflow-hidden rounded-full">
          <div
            className="absolute inset-y-0 left-0 w-1/2 rounded-full"
            style={{
              background: "linear-gradient(90deg, rgba(248,171,60,0) 0%, rgba(248,171,60,1) 50%, rgba(251,191,36,1) 100%)",
              animation: "shimmer 2s ease-in-out infinite",
            }}
          />
        </div>

      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); } }
        @keyframes shimmer { 0% { transform: translateX(-200%); } 100% { transform: translateX(400%); } }
      `}</style>
    </div>
  );
}