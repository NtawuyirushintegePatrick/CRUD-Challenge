import React from "react";
// import Todo from "./components/Todo";
import { BrowserRouter } from "react-router-dom";
import Index from "./Routes/Index";
import Header from "./components/Header";
import '../src/App.css'
import Footer from "./components/Footer";



const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Index />
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
