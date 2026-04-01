import { ImageResponse } from "next/og";

export const alt = "Built for Pros website preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "#0a0f1a",
          color: "#ffffff",
          padding: "72px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 24,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#f96302",
            fontWeight: 700,
          }}
        >
          Built for Pros
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: "920px",
              color: "#ffffff",
            }}
          >
            Contractor marketing that feels easy to start and worth paying for.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.5,
              maxWidth: "840px",
              color: "#9ca3af",
            }}
          >
            Custom website, SEO, Google presence, reviews, and lead flow handled
            for you.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#f96302",
              color: "#ffffff",
              borderRadius: "999px",
              padding: "14px 24px",
              fontWeight: 700,
            }}
          >
            Built for contractors who want growth without the agency headache
          </div>
        </div>
      </div>
    ),
    size,
  );
}
