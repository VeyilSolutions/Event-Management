import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/testimonial.css";

const TESTIMONIAL_DATA = [
  {
    avatar: "/images/1.jpg",
    name: "Sarah Jenkins",
    role: "Director",
    review: "The production quality was world-class. The stage design was truly breathtaking.",
  },
  {
    avatar: "/images/2.jpg",
    name: "Mark Stevens",
    role: "Organizer",
    review: "Flawless execution on a massive scale. They handled logistics with precision.",
  },
  {
    avatar: "/images/2.jpg",
    name: "Mark Stevens",
    role: "Organizer",
    review: "Flawless execution on a massive scale. They handled logistics with precision.",
  },
  {
    avatar: "/images/2.jpg",
    name: "Mark Stevens",
    role: "Organizer",
    review: "Flawless execution on a massive scale. They handled logistics with precision.",
  },
  {
    avatar: "/images/2.jpg",
    name: "Mark Stevens",
    role: "Organizer",
    review: "Flawless execution on a massive scale. They handled logistics with precision.",
  },
  {
    avatar: "/images/3.jpg",
    name: "Elena Rossi",
    role: "Production",
    review: "Their technical expertise in lighting is unmatched. A top-tier partner.",
  },
];

export default function Testimonial({ testimonials = TESTIMONIAL_DATA }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    dragSpeed: 1.2,
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 25 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 30 } },
    },
  });

  if (!testimonials.length) return null;

  return (
    <section 
      className="testimonial-section"
      style={{ background: "radial-gradient(circle at top right, #1c1c2e, #0f0f14)" }}
    >
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">Client Reviews</p>
        </div>

        <div ref={sliderRef} className="keen-slider testimonial-slider">
          {testimonials.map((item, index) => (
            <div className="keen-slider__slide testimonial-slide" key={index}>
              <div className="testimonial-content glass-card">
                <p className="testimonial-review">“{item.review}”</p>
                <div className="testimonial-user">
                  <img src={item.avatar} alt={item.name} className="user-avatar" />
                  <div className="user-info">
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}