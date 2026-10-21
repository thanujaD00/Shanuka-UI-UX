import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const handle = {
  position: "absolute" as const,
  width: 14,
  height: 14,
  background: "#f1eee7",
  border: "2px solid #2b50ff",
};

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f1eee7",
          color: "#121210",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#56544e" }}>
          <span>PORTFOLIO — 2026</span>
          <span>{profile.title.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", position: "relative", padding: "8px 16px", border: "2px solid #2b50ff", alignSelf: "flex-start" }}>
          <div style={{ ...handle, left: -8, top: -8 }} />
          <div style={{ ...handle, right: -8, top: -8 }} />
          <div style={{ ...handle, left: -8, bottom: -8 }} />
          <div style={{ ...handle, right: -8, bottom: -8 }} />
          <div style={{ display: "flex", flexDirection: "column", fontSize: 150, fontWeight: 700, letterSpacing: -8, lineHeight: 0.9 }}>
            <span>{profile.firstName}</span>
            <span>{profile.lastName}</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30 }}>
          <span>Where design meets engineering.</span>
          <span style={{ width: 18, height: 18, borderRadius: 9, background: "#ff4f1a" }} />
        </div>
      </div>
    ),
    size,
  );
}
