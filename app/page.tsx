import Image from "next/image";
import { headers } from "next/headers";
import Countdown from "./components/Countdown";

const trackingLinks: Record<string, string> = {
  va2049: "https://onlyfans.com/erinmiajames/c9",
  va2048: "https://onlyfans.com/erinmiajames/c8",
  va2045: "https://onlyfans.com/erinmiajames/c7",
  va2037: "https://onlyfans.com/erinmiajames/c6",
  va1525: "https://onlyfans.com/erinmiajames/c5",
  p:      "https://onlyfans.com/erinmiajames/c10",
  lu:     "https://onlyfans.com/erinmiajames/c4",
  default: "https://onlyfans.com/erinmiajames",
};

const IconIG = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
  </svg>
);

const IconTT = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
  </svg>
);

const IconTG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
  </svg>
);

const IconFB = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

function SocialButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={"_blank"}
      rel={"noreferrer"}
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "rgba(0,0,0,0.75)",
        display: "grid",
        placeItems: "center",
        textDecoration: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      {children}
    </a>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  const LINK_MAIN = trackingLinks[ref ?? ""] ?? trackingLinks["default"];

  const NAME = "Erin Mia James";
  const PROMO = "75% OFF · JUST TODAY";
  const LINK_IG = "https://www.instagram.com/erinmiajamesagain/";
  const LINK_TIKTOK = "https://www.tiktok.com/@itserinmiajames";
  const LINK_TG = "https://t.me/+GjGJj2dorOEzNTE1";
  const LINK_FB = "https://www.facebook.com/ErinMiaJames/";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding: "clamp(12px, 4vw, 28px)",
      }}
    >
      <Image src="/bg.jpg" alt="background" fill priority style={{ objectFit: "cover", opacity: 0.7 }} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "min(400px, 92vw)",
          borderRadius: 28,
          overflow: "hidden",
          background: "rgba(20,20,20,0.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
          color: "white",
        }}
      >
      {/* HERO IMAGE */}
        <div style={{ position: "relative", width: "100%", height: "clamp(260px, 60vw, 360px)" }}>
          <Image src="/avatar.jpg" alt="Erin Mia James" fill priority style={{ objectFit: "cover" }} />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "60%",
            background: "linear-gradient(to bottom, transparent, rgba(20,20,20,0.98))",
          }} />

          {/* Botones sociales DENTRO de la foto */}
          <div style={{
            position: "absolute", bottom: 60, left: 0, right: 0,
            display: "flex", gap: 14, justifyContent: "center",
          }}>
            <SocialButton href={LINK_TIKTOK}><IconTT /></SocialButton>
            <SocialButton href={LINK_TG}><IconTG /></SocialButton>
            <SocialButton href={LINK_IG}><IconIG /></SocialButton>
            <SocialButton href={LINK_FB}><IconFB /></SocialButton>
          </div>

          {/* Nombre + verificado */}
          <div style={{
            position: "absolute", bottom: 16, left: 0, right: 0,
            textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            <span style={{ fontSize: "clamp(22px, 6vw, 30px)", fontWeight: 900 }}>{NAME}</span>
            <span style={{
              width: 22, height: 22, borderRadius: "50%",
              background: "#1d9bf0",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 900, color: "white", flexShrink: 0,
            }}>✓</span>
          </div>
        </div>

        {/* BODY */}
        <div style={{
          display: "grid",
          placeItems: "center",
          gap: 16,
          padding: "20px 20px 28px",
        }}>

          {/* PROMO */}
          <div style={{
            padding: "10px 24px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            fontWeight: 800,
            fontSize: "clamp(16px, 4.5vw, 20px)",
            letterSpacing: 1,
          }}>
            {PROMO}
          </div>

          {/* CARD IMAGE */}
          <a
            href={LINK_MAIN}
            target={"_blank"}
            rel={"noreferrer"}
            style={{ display: "block", position: "relative", width: "100%", borderRadius: 16, overflow: "hidden" }}
          >
            <Image
              src="/card.jpg"
              alt="exclusive"
              width={900}
              height={500}
              style={{
                width: "100%",
                height: "clamp(160px, 40vw, 220px)",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "10px 0",
              textAlign: "center",
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: 1,
              background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
            }}>
              EXCLUSIVE CONTENT · CLICK HERE
            </div>
          </a>

          {/* COUNTDOWN */}
          <Countdown minutes={15} storageKey="erin-mia-james-endsAt" />
        </div>
      </div>
    </main>
  );
}