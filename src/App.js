import React from "react";
// import Todo from "./components/Todo";
import { BrowserRouter } from "react-router-dom";
import Index from "./Routes/Index";
import Header from "./components/Header";
import '../src/App.css'



const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Index />
    </BrowserRouter>
  );
};

export default App;
