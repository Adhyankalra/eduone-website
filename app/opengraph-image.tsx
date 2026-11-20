import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "EDUONE – Complete School Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          backgroundColor: "#102D4D",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent corner indicator */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            backgroundColor: "#16A36A",
          }}
        />

        {/* Top Header: Brand Lockup */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Official Emblem */}
          <svg
            viewBox="0 0 140 140"
            width="80"
            height="80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="113,54 112,67 66,89 38,79 37,94 70,111 113,90 113,106 68,129 20,107 20,57 66,73"
              fill="#FFFFFF"
            />
            <polygon
              points="106,79 112,81 74,99 75,94"
              fill="#FFFFFF"
            />
            <polygon
              points="68,10 128,35 68,62 8,39"
              fill="#16A36A"
            />
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

          {/* Divider */}
          <div
            style={{
              width: "2px",
              height: "64px",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              margin: "0 28px",
            }}
          />

          {/* Wordmark & Tagline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 52,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                display: "flex",
              }}
            >
              <span>EDU</span>
              <span style={{ color: "#16A36A" }}>ONE</span>
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.22em",
                color: "#CBD5E1",
                textTransform: "uppercase",
                marginTop: 8,
              }}
            >
              Complete School Solutions
            </div>
          </div>
        </div>

        {/* Center: Proposition & Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Everything Your School Needs, Under One Roof.
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#CBD5E1",
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            Integrated procurement, campus IT infrastructure, CCTV surveillance &
            AMC maintenance partner for private schools in Delhi NCR.
          </div>
        </div>

        {/* Bottom: Solutions Badge Grid */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
            }}
          >
            {["Student Essentials", "IT Hardware", "CCTV & Security", "Campus Wi-Fi", "AMC Support"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    padding: "8px 16px",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#16A36A",
            }}
          >
            Delhi NCR • eduone.in
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
