import React from "react";
import { Route,Routes } from "react-router-dom";
import Admin from "../components/Admin";
import Register from "../components/Register"
import Login from "../components/Login"
// import Employees from "../components/Employees"
import Home from "../components/Home"
import Todo from "../components/Todo";


const Index = () => {
  return (
    <Routes>
        
          <Route path="home" element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="employees" element={<Employees />} /> */}
          <Route path="todo" element={<Todo />} />
          

    </Routes>
  )
}

export default Index