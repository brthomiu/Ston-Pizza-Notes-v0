<img src="/client/src/assets/stonHeader.png" alt="Ston Pizza Notes">

### An app for pizza chefs.

Stön (stəʊn) is a platform built to help home cooks and chefs develop better pizzas.

# Backend

## Technologies
TypeScript, Node, Express, MongoDB, Mongoose, JWT

## Features
The backend serves the frontend and has API routes for user registration and login as well as storing and retrieving pizzas.
It uses Mongoose to connect to MongoDB, and hashes password data into a JSON Web Token prior to storage.

# Frontend

## Technologies
JavaScript, React, React-Router, Redux-Toolkit, Axios

## Features
Login and registration forms are hooked into the global state and function as expected.
Global state is handled using Redux-Toolkit; the slices contains reducers, actions are dispatched from services to update the store.
React-Router is used to handle navigation, user will be redirected to home page while logged in and to login page while logged out.
Axios is used to make API fetch requests to the backend.