import React, { useEffect, useState } from "react";

export default function Hero({
  images,
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 260,
  cardSizeLg = 120,
  cardSizeMd = 100,
  cardSizeSm = 80,
  className = "",
}) {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section 
      className={`relative overflow-hidden text-white min-h-screen flex flex-col ${className}`}
      style={{
        background: "radial-gradient(circle at top right, #1c1c2e, #0f0f14)"
      }}
    >
      <div
        className="relative mx-auto"
        style={{
          width: "100%",
          height: dimensions.radius * 1.2,
        }}
      >
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {images.map((src, i) => {
            const angle = startAngle + step * i;
            const angleRad = (angle * Math.PI) / 180;

            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: dimensions.cardSize,
                  height: dimensions.cardSize,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  transform: "translate(-50%, 50%)",
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: `${i * 100}ms`,
                  opacity: 0,
                }}
              >
                <div
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    transform: `rotate(${angle / 4}deg)`,
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "-200px", padding: "40px" }}>
        <h1 style={{ fontSize: "48px" }}>Elevating Every Celebration</h1>
        <p style={{ marginTop: "20px", opacity: 0.6 }}>
          Award Shows | Music Festivals | Live Concerts
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, 60%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 50%);
          }
        }
      `}</style>
    </section>
  );
}