# MERN Task Manager

A full-stack task management application built with the MERN stack, featuring secure authentication, task CRUD operations, filtering, sorting, search, priorities, due dates, and dashboard statistics.

## Live Demo

[View Live Project]https://task-manager-frontend-uep9.onrender.com/

## Features

* User registration and login
* JWT-based authentication
* Create, update, and delete tasks
* Mark tasks as completed
* Search tasks
* Filter by category, priority, and status
* Sort tasks
* Task due dates
* Dashboard with task statistics
* Progress tracking
* Responsive user interface
* Toast notifications and alerts
* Protected routes

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Axios
* Lucide React
* SweetAlert

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt

## Project Structure

```text
mern-task-manager/
├── frontend/
└── backend/
```

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/codewithvaish/mern-task-manager.git
cd mern-task-manager
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

### 3. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

## Future Improvements

* Task reminders and notifications
* Advanced user settings
* Additional dashboard analytics
* Team-based task management

## Author

**Vaishali Variya**

[GitHub](https://github.com/codewithvaish)
