# Brad's 2023 Big Fullstack Project

Main branch - under development.

# Backend

## Technologies
TypeScript, Node, Express, MongoDB, Mongoose, JWT

## Features
The backend serves the frontend and has API routes for user registration and login.
It also uses Mongoose to connect to a MongoDB cluster, and hashes password data into a JSON Web Token prior to storage.

# Frontend

## Technologies
JavaScript, React, React-Router, Redux-Toolkit

## Features
The layout consists of a few simple unstyled page components and a navbar component.
Login and registration forms are hooked into the global state and function as expected.
Global state is handled using Redux-Toolkit; authSlice contains reducers, actions are dispatched from authService to update the store.
React-Router is used to handle navigation, user will be redirected to home page while logged in and to login page while logged out.