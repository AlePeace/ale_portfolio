import { ImageResponse } from "next/og"

export const runtime     = "edge"
export const alt         = "Alessandro Sparano — Creative Developer"
export const size        = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0f16",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* accent top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#4ec9b0" }} />

        {/* comment header */}
        <div style={{ color: "#3d4872", fontSize: 18, marginBottom: 32, fontStyle: "italic" }}>
          {"// portfolio · alessandrosparano.com"}
        </div>

        {/* JSDoc block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 40 }}>
          <div style={{ color: "#3d4872", fontSize: 20, fontStyle: "italic" }}>{"/**"}</div>
          <div style={{ color: "#3d4872", fontSize: 20, fontStyle: "italic", paddingLeft: 8 }}>
            {" * "}
            <span style={{ color: "#c792ea" }}>@name</span>
            <span style={{ color: "#3d4872" }}>{"     Alessandro Sparano"}</span>
          </div>
          <div style={{ color: "#3d4872", fontSize: 20, fontStyle: "italic", paddingLeft: 8 }}>
            {" * "}
            <span style={{ color: "#c792ea" }}>@role</span>
            <span style={{ color: "#3d4872" }}>{"     Creative Developer"}</span>
          </div>
          <div style={{ color: "#3d4872", fontSize: 20, fontStyle: "italic", paddingLeft: 8 }}>
            {" * "}
            <span style={{ color: "#c792ea" }}>@agency</span>
            <span style={{ color: "#3d4872" }}>{"   QCore Agency · Napoli"}</span>
          </div>
          <div style={{ color: "#3d4872", fontSize: 20, fontStyle: "italic" }}>{"  */"}</div>
        </div>

        {/* const block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 26 }}>
            <span style={{ color: "#c792ea" }}>{"const "}</span>
            <span style={{ color: "#ffcb6b" }}>{"Alessandro"}</span>
            <span style={{ color: "#cdd6f4" }}>{" = {"}</span>
          </div>
          <div style={{ fontSize: 24, paddingLeft: 40 }}>
            <span style={{ color: "#89ddff" }}>{"stack"}</span>
            <span style={{ color: "#cdd6f4" }}>{":  [ "}</span>
            <span style={{ color: "#c3e88d" }}>{"'Next.js'"}</span>
            <span style={{ color: "#cdd6f4" }}>{", "}</span>
            <span style={{ color: "#c3e88d" }}>{"'React'"}</span>
            <span style={{ color: "#cdd6f4" }}>{", "}</span>
            <span style={{ color: "#c3e88d" }}>{"'WordPress'"}</span>
            <span style={{ color: "#cdd6f4" }}>{" ],"}</span>
          </div>
          <div style={{ fontSize: 24, paddingLeft: 40 }}>
            <span style={{ color: "#89ddff" }}>{"status"}</span>
            <span style={{ color: "#cdd6f4" }}>{": "}</span>
            <span style={{ color: "#4ec9b0" }}>{"'available'"}</span>
            <span style={{ color: "#cdd6f4" }}>{","}</span>
          </div>
          <div style={{ color: "#cdd6f4", fontSize: 26 }}>{"}"}</div>
        </div>

        {/* bottom URL */}
        <div style={{ position: "absolute", bottom: 40, right: 90, color: "#4a5270", fontSize: 16 }}>
          alessandrosparano.com
        </div>

        {/* accent bottom bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "#4ec9b0" }} />
      </div>
    ),
    { ...size }
  )
}
