<img src="/client/src/assets/stonHeader.png" alt="Ston Pizza Notes">

### An app for pizza chefs.

Stön (stəʊn) is a platform built to help home cooks and chefs develop better pizzas.

---

# Backend

---

## Technologies

TypeScript, Node, Express, MongoDB, Mongoose, JWT

## Features

The backend serves the frontend and has API routes for user registration and login as well as storing and retrieving pizzas.
It uses Mongoose to connect to MongoDB, and hashes password data into a JSON Web Token prior to storage.

---

# Frontend

---

## Technologies

JavaScript, React, React-Router, Redux-Toolkit, Axios

## Features

Login and registration forms are hooked into the global state and function as expected.
Global state is handled using Redux-Toolkit; the slices contains reducers, actions are dispatched from services to update the store.
React-Router is used to handle navigation, user will be redirected to home page while logged in and to login page while logged out.
Axios is used to make API fetch requests to the backend.

---

# Developer notes

## Current version - 0.1.1a - 4/7/2023

---

## Upcoming features - to be implemented soon

- Require permission to delete recipes

- Add pagination for ingredient tags inside the modal

- Clicking outside of modals should close them

- Update media queries for mobile devices

- Ability to add image(s) to recipe
    - Limit file size for images
    - JS image compression library?

- Password reset functionality

- Email account verification for new accounts

- Fix the ingredient parsing to allow ingredients with multi-word names

  - Split words off into tags after two spaces OR a comma and a space

- Sort and search for browsing recipes

  - Search by name/user/ingredient
  - Sort by rating
  - Show my recipes

- Rating system

  - 1-5 star system
  - Save name/ID of recipe and rating in user data
    - (single array of objects that correspond to rated recipe)

- Settings page

  - Input to edit user profile
  - Delete account

- Add user profiles
  - Modal to display user profile
  - Make all instances of usernames a link to open the modal
  - Show created recipes on profile
  - Show rated recipes on profile
