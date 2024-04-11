# Blogging Site Backend

This is a blogging site backend built using Express.js and MySQL with JWT authentication.

## Project Structure

The project follows the following structure:

- `config/`: Contains database configuration.
- `controllers/`: Contains controllers for authentication and blog functionality.
- `middleware/`: Contains middleware for JWT authentication.
- `models/`: Contains models for User and Blog.
- `routes/`: Contains route handlers for authentication and blog routes.
- `utils/`: Contains utility functions like JWT generation and error handling.
- `tests/`: Contains unit tests for the backend.
- `index.js`: Main entry point of the application.

## Setup

1. Clone the repository:

`git clone <repository-url>`
`cd blogging-site-backend`


2. Install dependencies:

`npm install`


3. Create a `.env` file in the root directory and define the following environment variables:

`DB_HOST=localhost`
`DB_USER=root`
`DB_PASSWORD=password`
`DB_DATABASE=blog_db`
`JWT_SECRET=your_secret_key`


4. Set up your MySQL database according to the configurations.

5. Start the server:

`npm start`


## Usage

- Register a user using `/auth/register` endpoint.
- Log in using `/auth/login` endpoint to get a JWT token.
- Use the obtained token for authentication in protected routes.
- Perform CRUD operations on blogs using `/blogs` endpoint.

## API Documentation

API documentation is available in the Swagger/OpenAPI specification file: [swagger.yaml](./swagger.yaml).

## Start Mysql Server 

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL
);
