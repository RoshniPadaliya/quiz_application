# Quiz appliction System Backend

This is the backend of an Education Management System (EMS) that handles user authentication, role-based authorization, course management, enrollment, grade management, and quiz functionality. The backend is built with Node.js, Express, and MongoDB, and uses JWT for secure authentication and bcrypt for password hashing.

## Features

- **User Authentication**: JWT-based authentication for login and registration.
- **Role-Based Authorization**: Admin, Instructor, and Student roles with different access levels.
- **Course Management**: CRUD operations for courses and enrolling students.
- **Grade Management**: Manage and update student grades.
- **Quiz Management**: Create, retrieve, and manage quizzes.
- **Secure Password Hashing**: Passwords are hashed using bcrypt for security.
- **MongoDB Aggregation**: Analytics and reporting on courses, enrollments, etc.

## Technologies

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing courses, users, enrollments, quizzes, etc.
- **JWT**: JSON Web Tokens for authentication
- **bcrypt.js**: For hashing passwords
- **Mongoose**: ODM for MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RoshniPadaliya/quiz_application.git
