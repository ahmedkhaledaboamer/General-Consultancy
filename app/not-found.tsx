import Logo from "@/components/logo";
import { Link, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { DocumentTitle } from "@/components/document-title";

export default async function NotFound() {
  const locale =
    (await getLocale().catch(() => null)) ?? routing.defaultLocale;
  const messages = await getMessages({ locale });
  const t = await getTranslations({ locale, namespace: "notFound" });
  const meta = await getTranslations({ locale, namespace: "meta" });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <DocumentTitle title={meta("notFound.title")} />
      <main className="min-h-screen bg-[#060912] text-white flex flex-col overflow-hidden relative">

      {/* ── Background nebula ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 30% 60%, #141430 0%, #0A0A22 50%, #060912 100%)",
        }}
      />

      {/* Blue-purple glow — top center */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,91,255,0.10) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Gold glow — bottom right */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px]"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, rgba(201,168,76,0.10) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Teal accent — bottom left */}
      <div
        className="pointer-events-none absolute bottom-10 left-0 w-[400px] h-[300px]"
        style={{
          background:
            "radial-gradient(circle at 0% 100%, rgba(20,184,166,0.07) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Fine grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ── Stars ── */}
      {[
        { top: "6%",  left: "10%", size: 2,   opacity: 0.6 },
        { top: "12%", left: "82%", size: 1.5, opacity: 0.45 },
        { top: "20%", left: "55%", size: 1,   opacity: 0.3 },
        { top: "38%", left: "91%", size: 2,   opacity: 0.5 },
        { top: "60%", left: "5%",  size: 1.5, opacity: 0.4 },
        { top: "75%", left: "94%", size: 1,   opacity: 0.3 },
        { top: "88%", left: "25%", size: 2,   opacity: 0.5 },
        { top: "92%", left: "72%", size: 1.5, opacity: 0.35 },
        { top: "4%",  left: "48%", size: 1,   opacity: 0.3 },
        { top: "48%", left: "2%",  size: 1.5, opacity: 0.3 },
        { top: "28%", left: "18%", size: 1,   opacity: 0.25 },
        { top: "55%", left: "75%", size: 1,   opacity: 0.25 },
      ].map((star, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* ── Two-column layout ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

          {/* ── LEFT: giant 404 ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start select-none">

            {/* Orbit rings behind 404 */}
            <div className="relative flex items-center justify-center mb-6">
              <div
                className="absolute w-64 h-64 rounded-full"
                style={{ border: "1px solid rgba(201,168,76,0.08)" }}
              />
              <div
                className="absolute w-48 h-48 rounded-full"
                style={{
                  border: "1px solid rgba(99,91,255,0.10)",
                  transform: "rotate(25deg)",
                }}
              />

              {/* Gradient 404 */}
              <span
                style={{
                  fontSize: "clamp(100px, 22vw, 180px)",
                  fontWeight: 900,
                  letterSpacing: "-0.06em",
                  lineHeight: 1,
                  background:
                    "linear-gradient(135deg, #FFFFFF 0%, rgba(201,168,76,0.85) 55%, rgba(201,168,76,0.4) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                404
              </span>
            </div>

            {/* Gold divider line */}
            <div
              className="hidden lg:block w-48 h-px mb-6"
              style={{
                background:
                  "linear-gradient(90deg, rgba(201,168,76,0.4), transparent)",
              }}
            />

            {/* Sub-label */}
            <p
              className="hidden lg:block text-xs tracking-[0.3em] uppercase"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              {t("statusLabel")}
            </p>
          </div>

          {/* ── Vertical divider ── */}
          <div
            className="hidden lg:block w-px h-72 mx-10 flex-shrink-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(201,168,76,0.2), transparent)",
            }}
          />

          {/* ── RIGHT: card ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <div
              className="w-full  relative overflow-hidden rounded-2xl"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 0 0 1px rgba(201,168,76,0.06), 0 20px 60px -10px rgba(0,0,0,0.6), 0 0 60px -20px rgba(99,91,255,0.12)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {/* Top shimmer */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.35) 40%, rgba(99,91,255,0.25) 70%, transparent 100%)",
                }}
              />

              {/* Corner purple blob */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full"
                style={{
                  background: "rgba(99,91,255,0.12)",
                  filter: "blur(30px)",
                }}
              />

              <div className="relative z-10 px-7 py-8 flex flex-col gap-6">

                {/* Logo + badge row */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                    }}
                  >
                    <Logo size={36} className="w-full h-full rounded-xl" />
                  </div>

                  <div
                    className="flex items-center gap-2 rounded-full px-3 py-1"
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.18)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#C9A84C" }}
                    />
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#C9A84C",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t("badge")}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-2.5">
                  <h1
                    className="text-xl font-bold leading-snug text-white text-center"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {t("title")}
                  </h1>
                  <p
                    className="text-sm leading-relaxed text-center"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {t("description")}
                  </p>
                </div>

                {/* Thin divider */}
                <div
                  className="w-full h-px"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />

                {/* CTA button */}
                <div className="relative group w-full">
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "rgba(201,168,76,0.25)",
                      filter: "blur(14px)",
                      transform: "scale(1.1)",
                    }}
                  />
                  <Link
                    href="/"
                    className="relative flex items-center justify-center gap-2.5 w-full rounded-xl py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060912]"
                    style={{
                      background:
                        "linear-gradient(135deg, #C9A84C 0%, #D4B762 50%, #B8932E 100%)",
                      color: "#12100A",
                      boxShadow:
                        "0 4px 20px rgba(201,168,76,0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 7H3M6 4L3 7l3 3" />
                    </svg>
                    {t("cta")}
                  </Link>
                </div>

              </div>

              {/* Bottom shimmer */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
                }}
              />
            </div>

            {/* Mobile sub-label */}
            <p
              className="lg:hidden mt-5 text-xs tracking-[0.3em] uppercase text-center"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              {t("statusLabel")}
            </p>
          </div>

        </div>
      </div>
      </main>
    </NextIntlClientProvider>
  );
}