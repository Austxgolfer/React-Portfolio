import React from "react";
import MainPage from "./components/Mainpg/main";
import ProjectPage from "./components/Projpg/proj";
import ContactForm from "./components/Contactpg/form";
import "./App.css";

export default function App() {
  return (
    <div>
      <MainPage />
      <ProjectPage />
      <ContactForm />
    </div>
  );
}
