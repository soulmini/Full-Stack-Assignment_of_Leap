// CreateTodo.js
import React, { useState } from 'react';
import './createtodo.css';
import { useNavigate } from 'react-router-dom';

const CreateTodo = () => {
  const navigate = useNavigate();
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    completed: false,
    due_date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const handleAddTodo = async () => {
    try {
  
      // Make a POST request to add the new todo to the backend
      const token = localStorage.getItem('token');
  
      if (!token) {
        // Handle the case where the token is missing
        console.error('Authentication token is missing');
        navigate('/');
        return;
      }
  
      const res = await fetch('http://localhost:3001/createTodo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify(newTodo),
      });
  
      if (!res.ok) {
        throw new Error('Failed to add todo');
      }
  
      // Handle success, e.g., show a success message, update UI, etc.
      console.log('Todo added successfully');
      navigate('/gettodo');
    } catch (error) {
      console.error('Error adding todo:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };  

  return (
    <div className='create-todo-container'>
      <h1>Create Todo</h1>
      <form>
        <label>Title:</label>
        <input
          type='text'
          name='title'
          value={newTodo.title}
          onChange={handleInputChange}
        />

        <label>Description:</label>
        <textarea
          name='description'
          value={newTodo.description}
          onChange={handleInputChange}
        ></textarea>

        <label>Completed:</label>
        <input
          type='checkbox'
          name='completed'
          checked={newTodo.completed}
          onChange={() =>
            setNewTodo((prevTodo) => ({ ...prevTodo, completed: !prevTodo.completed }))
          }
        />

        <label>Due Date:</label>
        <input
          type='text'
          name='due_date'
          value={newTodo.due_date}
          onChange={handleInputChange}
        />

        <button type='button' onClick={handleAddTodo}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
