import React, { useState, useEffect } from 'react';
import './GetTodo.css';

import { useNavigate } from 'react-router-dom';
const GetTodo = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch todos from the backend using the token stored in localStorage
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) {
          // Handle the case where the token is missing
          console.error('Authentication token is missing');
          navigate('/');
          return;
        }
  
        if (token) {
          const response = await fetch('http://localhost:3001/getTodo', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${token}`, // Make sure to add 'Bearer' before the token
            },
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch todos');
          }
  
          const data = await response.json();
          console.log(data[0]._id);
          setTodos(data);
        }
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
  
    fetchData();
  }, []);
   // The empty dependency array ensures that this effect runs once when the component mounts

   const handleDelete = async (_id : any, id : any) => {
    try {
      // Implement delete logic based on the todo's id
      const updatedTodos = todos.filter((todo) => todo.id !== id);
  
      // Make a DELETE request to delete the todo on the backend
      const token = localStorage.getItem('token');
  
      if (!token) {
        // Handle the case where the token is missing
        console.error('Authentication token is missing');
        return;
      }
  
      const res = await fetch(`http://localhost:3001/deleteTodo/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`, // Include the token in the Authorization header
        },
      });
  
      if (!res.ok) {
        throw new Error('Failed to delete todo');
      }
  
      // Handle success, e.g., show a success message, update UI, etc.
      console.log('Todo deleted successfully');
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error deleting todo:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };
  

  const handleUpdate = (id) => {
    // Implement update logic based on the todo's id
    // You can navigate to an update page or show a modal for updating the todo
    console.log(`Update todo with id ${id}`);
    navigate(`/updatetodo/${id}`)

  };

  return (
    <div className='container'>
      {todos.map((todo) => (
        <div key={todo.id} className='todo-card'>
          {/* console.log(todo); */}
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          <p>Due Date: {todo.due_date}</p>
          <div className="button-container">
            <button className="delete-button" onClick={() => handleDelete(todo._id)}>
              Delete
            </button>
            <button className="update-button" onClick={() => handleUpdate(todo._id, todo.id)}>
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetTodo;
