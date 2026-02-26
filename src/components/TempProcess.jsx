import React from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "We sit down to understand your vision, goals, and budget requirements."
  },
  {
    number: "02",
    title: "Strategic Planning",
    desc: "Our team designs the layout, secures vendors, and builds the timeline."
  },
  {
    number: "03",
    title: "Perfect Execution",
    desc: "We handle the heavy lifting on-site so you can enjoy your event stress-free."
  },
  {
    number: "04",
    title: "Post-Event Review",
    desc: "We ensure every detail was met and collect feedback for future success."
  }
];

export default function Process() {
  return (
    <section className="process-section" style={{ padding: "100px 20px", background: "var(--bg-dark)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 42px)", fontWeight: "800", color: "white" }}>
            How We Make Magic Happen
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "10px" }}>
            A seamless journey from the first spark of an idea to the final applause.
          </p>
        </div>

        <div className="process-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "30px",
          position: "relative" 
        }}>
          {steps.map((step, i) => (
            <div key={i} className="process-card" style={{ position: "relative" }}>
              {/* Glowing Number Icon */}
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "var(--bg-dark)",
                border: "2px solid var(--primary-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "800",
                color: "var(--primary-light)",
                boxShadow: "0 0 20px rgba(138, 121, 171, 0.3)",
                marginBottom: "20px"
              }}>
                {step.number}
              </div>

              <h3 style={{ color: "white", fontSize: "22px", marginBottom: "12px" }}>
                {step.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.6", fontSize: "15px" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}