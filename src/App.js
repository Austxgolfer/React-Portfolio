import React from "react";
import MainPage from "./components/Mainpg/main";
import ProjectPage from "./components/Projpg/proj";
import ContactForm from "./components/Contactpg/form";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MainPage} />
      <Route path="/project" component={ProjectPage} />
    </BrowserRouter>
  );
}
