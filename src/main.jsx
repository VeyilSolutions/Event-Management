import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import "./styles/home.css";
import "./styles/gallery.css";
import "./styles/contact.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/services.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);