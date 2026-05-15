import { ImageResponse } from "next/og";

import { heroVariants, siteConfig } from "@/content/site";

export const alt = "Built for Pros contractor marketing hero preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const hero = heroVariants.secondary;
const heroBackground = new URL("/hero-bg.jpg", siteConfig.url).toString();

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          background: "#05080d",
          color: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Manrope, Arial, sans-serif",
        }}
      >
        <img
          src={heroBackground}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.32,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, #05080d 0%, rgba(5, 8, 13, 0.9) 42%, rgba(5, 8, 13, 0.52) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(0deg, #05080d 0%, rgba(5, 8, 13, 0) 46%, rgba(5, 8, 13, 0.62) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -160,
            left: 160,
            display: "flex",
            height: 420,
            width: 880,
            borderRadius: "999px",
            background:
              "radial-gradient(ellipse at center, rgba(249, 99, 2, 0.16), rgba(249, 99, 2, 0) 68%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            maxWidth: 1040,
            flexDirection: "column",
            alignItems: "center",
            padding: "0 64px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              marginBottom: 22,
              display: "flex",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#f96302",
            }}
          >
            {hero.eyebrow}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: "-0.055em",
              lineHeight: 0.98,
              color: "#f8fafc",
            }}
          >
            {hero.titleLines?.map((line) => <div key={line}>{line}</div>)}
          </div>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              maxWidth: 760,
              fontSize: 22,
              lineHeight: 1.45,
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            {hero.description}
          </div>

          <div
            style={{
              marginTop: 42,
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 18,
              fontWeight: 700,
              color: "rgba(255, 255, 255, 0.82)",
            }}
          >
            <div
              style={{
                display: "flex",
                height: 10,
                width: 10,
                borderRadius: "999px",
                background: "#f96302",
              }}
            />
            {siteConfig.name}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
