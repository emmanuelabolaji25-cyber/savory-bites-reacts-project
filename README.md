# Savory Bites

A responsive restaurant website built with React JS, developed as the React JS Web Development Project Assignment (New Horizon).

## Project Description
Savory Bites is a fictional restaurant's online presence. The app introduces the business, showcases its menu, and lets visitors get in touch through a validated contact form. It demonstrates core React concepts including components, props, state, hooks, context, routing, and responsive CSS.

## Features
- Home, About, Menu, and Contact pages
- Client-side routing with React Router (no page reloads)
- Menu search and category filtering
- Add/remove-from-cart quantity counter per dish (useState + useContext)
- Favorite button on each menu item
- Mobile hamburger navigation menu
- Contact form with controlled inputs, validation, and submit feedback
- Fully responsive layout (Flexbox + CSS Grid + media queries)

## Technologies Used
- React JS (Vite)
- React Router DOM
- JavaScript (ES6+)
- CSS3 (Flexbox, Grid, media queries)

## Installation
1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production
```
npm run build
```
This generates a `dist` folder ready for deployment (e.g. to Netlify, Vercel, or Render).

## Project Structure
```
src/
  components/   Reusable components (Navbar, Footer, MenuItem, CartContext)
  pages/        Route-level pages (Home, About, Menu, Contact)
  App.jsx       Route definitions
  main.jsx      App entry point, router + provider setup
```
