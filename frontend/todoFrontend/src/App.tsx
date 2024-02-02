import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Singup'; // Fix the import statement
import Login from './components/Login'; // Fix the import statement
import GetTodo from './components/GetTodo';
import CreateTodo from './components/CreateTodo';
import UpdateTodo from './components/UpdateTodo';
import Navbar from './components/Navbar';
function App() {
  return (
    <> 
    <Navbar/>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/gettodo" element={<GetTodo />} />
      <Route path="/createtodo" element={<CreateTodo />} />
      {/* Use the colon syntax to define a parameter in the route path */}
      <Route path="/updatetodo/:id" element={<UpdateTodo />} />
    </Routes>
    </>
  );
}

export default App;
