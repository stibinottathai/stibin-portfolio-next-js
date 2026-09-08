import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Stibin Augustine — Full-Stack Developer & Digital Marketing Specialist in Dubai, UAE";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#030712",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.25) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.25) 0%, transparent 50%)",
          padding: "60px 80px",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top Header Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 20px",
              borderRadius: "9999px",
              backgroundColor: "rgba(6, 182, 212, 0.15)",
              border: "1px solid rgba(6, 182, 212, 0.4)",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                backgroundColor: "#34d399",
              }}
            />
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#67e8f9",
                letterSpacing: "0.05em",
              }}
            >
              DUBAI, UAE &amp; GLOBAL
            </span>
          </div>

          <span
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#94a3b8",
              fontFamily: "monospace",
            }}
          >
            stibinaugustine.com
          </span>
        </div>

        {/* Main Center Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
              margin: 0,
            }}
          >
            Stibin Augustine
          </h1>
          <div
            style={{
              fontSize: "34px",
              fontWeight: 700,
              background: "linear-gradient(to right, #22d3ee, #818cf8, #e879f9)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Full-Stack Developer &amp; Digital Marketing Specialist
          </div>
          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.5,
              color: "#cbd5e1",
              maxWidth: "950px",
              margin: 0,
            }}
          >
            Next.js · React · Flutter · AI Integrations · Technical SEO · AEO &amp; GEO · Google &amp; Meta Ads
          </p>
        </div>

        {/* Bottom Feature Tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            borderTop: "1px solid rgba(148, 163, 184, 0.2)",
            paddingTop: "24px",
          }}
        >
          {["4+ Years Hands-On", "#1 Google Rankings", "Enterprise GovTech & Fintech", "AI Automations"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#e2e8f0",
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
