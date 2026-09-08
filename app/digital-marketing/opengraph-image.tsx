import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Digital Marketing, SEO, AEO, GEO & Google Ads Specialist in Dubai | Stibin Augustine";
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
            "radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(217, 70, 239, 0.25) 0%, transparent 50%)",
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
              backgroundColor: "rgba(14, 165, 233, 0.15)",
              border: "1px solid rgba(14, 165, 233, 0.4)",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                backgroundColor: "#06b6d4",
              }}
            />
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#38bdf8",
                letterSpacing: "0.05em",
              }}
            >
              DIGITAL MARKETING &amp; SEO · DUBAI, UAE
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
            stibin.website/digital-marketing
          </span>
        </div>

        {/* Main Center Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#38bdf8",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Stibin Augustine
          </div>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              background: "linear-gradient(to right, #ffffff, #e0f2fe, #f5d0fe)",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
            }}
          >
            Digital Marketing, SEO, AEO &amp; Paid Growth
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.5,
              color: "#cbd5e1",
              maxWidth: "980px",
              margin: 0,
            }}
          >
            Ranked #1 on Google for high-intent keywords. Engineering organic search (SEO/AEO/GEO), Google Ads &amp; Meta Ads funnels.
          </p>
        </div>

        {/* Bottom Feature Tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            borderTop: "1px solid rgba(148, 163, 184, 0.2)",
            paddingTop: "24px",
          }}
        >
          {["Rank #1 Google Case Studies", "Google & Meta Ads", "AEO & GEO Search", "AI Automations"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
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
