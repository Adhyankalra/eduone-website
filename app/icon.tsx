import { ImageResponse } from "next/og";

export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#102D4D",
          borderRadius: 12,
        }}
      >
        <svg
          viewBox="0 0 140 140"
          width="36"
          height="36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Isometric "E" Book Base */}
          <polygon
            points="113,54 112,67 66,89 38,79 37,94 70,111 113,90 113,106 68,129 20,107 20,57 66,73"
            fill="#FFFFFF"
          />
          {/* Floating Middle Book Page Bar */}
          <polygon
            points="106,79 112,81 74,99 75,94"
            fill="#FFFFFF"
          />
          {/* Graduation Mortarboard Diamond Cap */}
          <polygon
            points="68,10 128,35 68,62 8,39"
            fill="#16A36A"
          />
          {/* Graduation Cap Tassel */}
          <line
            x1="128"
            y1="35"
            x2="128"
            y2="57"
            stroke="#16A36A"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <rect
            x="123"
            y="57"
            width="10"
            height="20"
            rx="4"
            fill="#16A36A"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
