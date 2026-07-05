import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#12262a",
          color: "#fbf8f1",
        }}
      >
        <div style={{ fontSize: 30, color: "#3dd6c2", fontWeight: 700, letterSpacing: 4 }}>
          FOOD FOUNDRY
        </div>
        <div style={{ fontSize: 62, fontWeight: 800, marginTop: 24, lineHeight: 1.1, maxWidth: 980 }}>
          A founder community and accelerator for food & foodservice innovation
        </div>
        <div style={{ fontSize: 26, marginTop: 32, color: "#dba916" }}>
          {`${site.address.line2} · thefoodfoundry.com`}
        </div>
      </div>
    ),
    { ...size },
  );
}
