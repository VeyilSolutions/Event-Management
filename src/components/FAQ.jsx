import React, { useState } from "react";

const faqData = [
  {
    question: "How far in advance should I book my event?",
    answer: "For large-scale events like weddings and festivals, we recommend booking 6-12 months in advance. However, for smaller corporate gatherings, we can often work within a 2-3 month lead time."
  },
  {
    question: "Do you handle vendor coordination?",
    answer: "Yes, we handle everything. From catering and lighting to security and sound, we manage all third-party vendors so you only have to talk to one point of contact: us."
  },
  {
    question: "Can you work within a specific budget?",
    answer: "Absolutely. We pride ourselves on creating high-impact experiences at various price points. During our initial consultation, we'll discuss your budget and prioritize spending to get the best results."
  },
  {
    question: "What types of events do you specialize in?",
    answer: "We specialize in high-energy events including Music Festivals, Award Shows, Live Concerts, and Premium Weddings."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id ="faq-section" className="faq-section" style={{ padding: "80px 0", backgroundColor: "var(--bg-dark)" }}>
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about planning your next big event with us.</p>
        </div>

        <div className="faq-grid" style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              style={{
                marginBottom: "15px",
                borderBottom: "1px solid var(--card-border)",
                background: "var(--card-bg)",
                borderRadius: "12px",
                overflow: "hidden"
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: "100%",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "600",
                  textAlign: "left"
                }}
              >
                <span>{item.question}</span>
                <span style={{ 
                  transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "var(--transition)",
                  color: "var(--primary-light)"
                }}>
                  ▼
                </span>
              </button>
              
              <div 
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0",
                  opacity: activeIndex === index ? "1" : "0",
                  transition: "all 0.4s ease-in-out",
                  overflow: "hidden"
                }}
              >
                <div style={{ padding: "0 20px 20px 20px", color: "var(--text-muted)" }}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}