# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Three.js, and Node.js.

## Project Structure

- **client/**: React frontend application (Vite).
- **server/**: Node.js Express backend for handling contact form submissions.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Setup & Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder.

2.  **Install Backend Dependencies**:
    ```bash
    cd server
    npm install
    ```

3.  **Install Frontend Dependencies**:
    ```bash
    cd ../client
    npm install
    ```

4.  **Environment Configuration**:
    - Create a `.env` file in the `server/` directory.
    - Add your email credentials (for the contact form):
      ```env
      EMAIL_USER=your-email@gmail.com
      EMAIL_PASS=your-app-password
      PORT=5000
      ```

## Running the Project

You need to run both the backend and frontend servers simultaneously. Open two terminal windows.

### 1. Start the Backend Server
In the first terminal:
```bash
cd server
node server.js
```
The server will start on `http://localhost:5000`.

### 2. Start the Frontend Application
In the second terminal:
```bash
cd client
npm run dev
```
The application will start on `http://localhost:5173`.

## Features

- **3D Hero Section**: Interactive icosahedron using React Three Fiber.
- **Animations**: Scroll-triggered animations with Framer Motion.
- **Contact Form**: Functional email sending via Nodemailer.
- **Responsive Design**: Optimized for desktop, tablet, and mobile.
