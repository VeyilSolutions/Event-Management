import {
  Instagram,
  Facebook,
  MessageCircle,
  Twitter,
  AtSign,
  Youtube,
  ArrowRight,
} from "lucide-react";
import "../styles/contact.css";

export default function Connect() {
  const socialPlatforms = [
    { 
      name: "Instagram", 
      description: "Visual Stories", 
      icon: <Instagram size={22} />, 
      bg: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" 
    },
    { 
      name: "Facebook", 
      description: "Social Network", 
      icon: <Facebook size={22} />, 
      bg: "#1877F2" 
    },
    { 
      name: "WhatsApp", 
      description: "Quick Chat", 
      icon: <MessageCircle size={22} />, 
      bg: "#25D366" 
    },
    { 
      name: "X", 
      description: "Latest News", 
      icon: <Twitter size={22} />, 
      bg: "#000000" 
    },
    { 
      name: "Threads", 
      description: "Join Conversations", 
      icon: <AtSign size={22} />, 
      bg: "#000000" 
    },
    { 
      name: "YouTube", 
      description: "Video Content", 
      icon: <Youtube size={22} />, 
      bg: "#FF0000" 
    },
  ];

  return (
    <section className="connect-section">
      <div className="connect-container">
        <h2 className="section-title">Connect</h2>
        <p className="section-subtitle">Follow Us</p>

        <div className="connect-grid">
          {socialPlatforms.map((platform, index) => (
            <div key={index} className="connect-card glass-card">
              <div
                className="icon-wrapper"
                style={{ background: platform.bg }}
              >
                {platform.icon}
              </div>

              <h3>{platform.name}</h3>
              <p>{platform.description}</p>

              <div className="connect-action">
                Connect <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}