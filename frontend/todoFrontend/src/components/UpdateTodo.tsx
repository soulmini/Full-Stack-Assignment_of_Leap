// UpdateTodo.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UpdataTodo.css'
import { useNavigate } from 'react-router-dom';
const UpdateTodo = () => {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const navigate = useNavigate();
  const [updatedTodo, setUpdatedTodo] = useState({
    title: '',
    description: '',
    completed: false,
    due_date: '',
  });

  useEffect(() => {
    // Fetch the todo details based on the 'id' (you can make a backend API call)
    // For now, let's simulate fetching by setting some dummy data
    const dummyTodoData = {
      title: `Todo ${id}`,
      description: 'Dummy description',
      completed: false,
      due_date: '2024-12-31',
    };

    setUpdatedTodo(dummyTodoData);
  }, [id]); // Trigger the effect when 'id' changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const handleUpdateTodo = async () => {
    try {
      // Make a PUT request to update the todo on the backend
      const token = localStorage.getItem('token');
      if (!token) {
        // Handle the case where the token is missing
        console.error('Authentication token is missing');
        navigate('/');
        return;
      }
      const res = await fetch(`http://localhost:3001/updateTodo/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
          // You may need to include authentication headers (e.g., Authorization: Bearer YOUR_TOKEN) if required by your backend
        },
        body: JSON.stringify(updatedTodo),
      });
  
      if (!res.ok) {
        throw new Error('Failed to update todo');
      }
  
      // Handle success, e.g., show a success message, navigate back to the todo list, etc.
      console.log('Todo updated successfully');
      navigate('/gettodo');
    } catch (error) {
      console.error('Error updating todo:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };
  

  return (
    <div>
      <h2>Update Todo {id}</h2>
      <form>
        <label>Title:</label>
        <input
          type='text'
          name='title'
          value={updatedTodo.title}
          onChange={handleInputChange}
        />

        <label>Description:</label>
        <textarea
          name='description'
          value={updatedTodo.description}
          onChange={handleInputChange}
        ></textarea>

        <label>Completed:</label>
        <input
          type='checkbox'
          name='completed'
          checked={updatedTodo.completed}
          onChange={() =>
            setUpdatedTodo((prevTodo) => ({ ...prevTodo, completed: !prevTodo.completed }))
          }
        />

        <label>Due Date:</label>
        <input
          type='text'
          name='due_date'
          value={updatedTodo.due_date}
          onChange={handleInputChange}
        />

        <button type='button' onClick={handleUpdateTodo}>
          Update Todo
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;
