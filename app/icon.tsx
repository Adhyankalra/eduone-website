import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#12345A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: 6,
          fontWeight: 800,
          border: "1px solid #16A36A",
        }}
      >
        E<span style={{ color: "#16A36A" }}>1</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
