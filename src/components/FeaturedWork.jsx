import React from "react";

const projects = [
  {
    title: "Neon Nights Festival",
    category: "Concert",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
    size: "large" 
  },
  {
    title: "The Grand Gala",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    size: "small"
  },
  {
    title: "Ethereal Weddings",
    category: "Premium Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    size: "small"
  }
];

export default function FeaturedWork() {
  return (
    <section style={{ padding: "100px 20px", background: "var(--bg-dark)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "50px" }}>
          <div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 42px)", fontWeight: "800", color: "white", lineHeight: "1" }}>
              Featured Work
            </h2>
            <p style={{ color: "var(--primary-light)", marginTop: "10px", letterSpacing: "2px", textTransform: "uppercase", fontSize: "14px" }}>
              Capturing the Unforgettable
            </p>
          </div>
          <button style={{ 
            padding: "12px 24px", 
            background: "transparent", 
            border: "1px solid var(--primary-light)", 
            color: "white", 
            borderRadius: "50px",
            cursor: "pointer"
          }}>
            View Gallery
          </button>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(2, 1fr)", 
          gap: "20px",
          height: "600px" 
        }}>
          {/* Big Main Image */}
          <div style={{ 
            gridRow: "span 2", 
            position: "relative", 
            borderRadius: "20px", 
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <img src={projects[0].image} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
            <div style={overlayStyle}>
              <span style={categoryStyle}>{projects[0].category}</span>
              <h3 style={titleStyle}>{projects[0].title}</h3>
            </div>
          </div>

          {/* Top Small Image */}
          <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
            <img src={projects[1].image} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
            <div style={overlayStyle}>
              <span style={categoryStyle}>{projects[1].category}</span>
              <h3 style={titleStyle}>{projects[1].title}</h3>
            </div>
          </div>

          {/* Bottom Small Image */}
          <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
            <img src={projects[2].image} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
            <div style={overlayStyle}>
              <span style={categoryStyle}>{projects[2].category}</span>
              <h3 style={titleStyle}>{projects[2].title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const overlayStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "30px",
  background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
  color: "white"
};

const categoryStyle = {
  fontSize: "12px",
  color: "var(--primary-light)",
  textTransform: "uppercase",
  letterSpacing: "1px"
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: "600",
  marginTop: "5px"
};