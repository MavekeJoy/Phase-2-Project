# FASHION FRENZY
Its an online clothing store that allows users to browse and select their favorite clothing items, manage their cart, and authenticate their accounts. This project provides a seamless shopping experience with user authentication and cart management functionalities.

## Features

- User Authentication
- Product Listing
- Shopping Cart
- Responsive Design
- Navigation

## Technologies Used

- React: Frontend Javascript
- Firebase: Backend for user authentication
- Tailwind: Styling
- React- Router: Library for routing in react applications

## Installation

1. Clone the repository 
    - git clone git@github.com:MavekeJoy/Phase-2-Project.git 
2. Install dependencies
    - npm install
3. Start the development server
    - npm start
4. Start the db.json
     -json-server --watch db.json --port3002

## Usage

- Authentication : On first load, the user is directed to the signup page. After successful authentication, the user is redirected to the main page containing the header, about section, and a button to proceed to the product listings.

- Shopping Cart : Users can add items to their shopping cart from the product listing page. The cart can be accessed via a button that displays the number of items added. Inside the cart, users can view the items, their prices, and quantities.

- Responsive Design : The entire website is responsive, ensuring that it works well on mobile devices, tablets, and desktops. Layouts adjust based on the screen size, and images scale appropriately.

## Components Overview

1. App.jsx 
   - The main entry point of the application, handling routing between different components.

2. AuthForm.jsx
   - Handles user authentication (sign-up and login) using Firebase.

3. Product.jsx 
   - Displays a list of products, with functionality to filter by category and add items to the cart.

4. ShoppingCart.jsx
   - Displays the items added to the cart, including their names, prices, and quantities. Users can navigate back to the products page from here.


### Credits

1. React : https://reactjs.org/
2. Tailwind.css :  https://tailwindcss.com/
3. React Router: https://reactrouter.com/
4. Firebase: https://firebase.google.com/
5. Blog : https://mavekejoy.hashnode.dev/fashion-frenzyclothing-line

### License 
   - This project is licensed under MIT license.
