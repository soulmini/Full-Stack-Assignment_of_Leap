# Todo App with Node.js, React, MongoDB, and Mongoose

This is a simple Todo application with backend using Node.js, MongoDB for the database, and Mongoose as the ODM. The frontend is built with React.

## Features

- **Create Todo:** Allows users to add new todos.
- **Get Todo:** Displays a list of todos.
- **Update Todo:** Enables users to edit and update existing todos.
- **Login and Signup:** Provides user authentication for secure access.

## Technologies Used

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose (ODM)

- **Frontend:**
  - React
  - React Router

- **Styling:**
  - CSS

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Setup

### Backend (Node.js and Express)

1. Navigate to the `backend` directory.
   ```bash
   cd backend

bash

npm install

Create a .env file in the backend directory with the following content:

env

MONGO_URI=<your_mongodb_uri>
SECRET_KEY=<your_secret_key_for_jwt>

Run the backend server.

bash

    npm start

Frontend (React)

    Navigate to the frontend directory.

    bash

cd frontend

Install dependencies.

bash

npm install

Run the frontend application.

bash
    cd frontend/todoFrontend

    npm run dev

    Open your browser and go to http://localhost:3000 to access the React app.

API Endpoints

    Create Todo:
        Method: POST
        Endpoint: /api/todos
        Request Body: { "title": "Example Todo", "description": "Example description", "completed": false, "due_date": "2022-12-31" }

    Get Todos:
        Method: GET
        Endpoint: /api/todos

...
Notes

    Make sure MongoDB is running before starting the backend server.
    Adjust the MongoDB URI and secret key for JWT in the .env file accordingly.
    This is a basic setup, and additional features, error handling, and security measures may need to be implemented for production use.
