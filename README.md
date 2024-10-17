# Title: Basys.ai CareSync

## Project Overview

Basys.ai CareSync is a comprehensive application designed to manage authorization requests, patient data, and provide seamless communication between healthcare providers and patients. 

## Project Structure

The project is organized into two main directories: **frontend** and **backend**. Each directory contains relevant code and resources that contribute to the overall functionality of the application.


### Directory Breakdown

- **Frontend**:
  - **/src**: The main source folder for the React application:
    - **/components**: Contains reusable React components.
      - **/modal**: Includes various modal components used throughout the application.
      - **/table**: Houses table components for displaying data in a tabular format.
      - **/header**: Contains the header component used for navigation and branding.
      - **/PatientDashboard**: Manages and displays patient-related data.
      - **/AuthRequestDashboard**: Manages and displays authorization request data.
    - **/redux**: Contains Redux-related files for managing global state across the application.
    - **App.js**: The main entry point for the React application where components are rendered.
  
- **Backend**:
  - **/config**: Contains configuration files, such as the database connection setup.
  - **/controllers**: Contains the logic for handling API requests and responses for various resources (patients and authorization requests).
  - **/models**: Defines the data structures and schemas used for storing data in the database.
  - **/routes**: Contains the route definitions for the API, including:
    - **patientRoutes.js**: API routes for managing patient data (e.g., getting all patients, adding a new patient).
    - **authRequestRoutes.js**: API routes for handling authorization requests.
  - **index.js**: The main entry point for the backend application, where the Express server is set up, and routes are defined.

## Getting Started

To run the project locally, you will need to set up both the frontend and backend environments. Follow the steps below:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node package manager)
- MongoDB & Mongoose

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/crystinameth/patient-health-dashboard.git
   cd patient-health-dashboard
2. **Setup backend**
   ```bash
   cd backend
   npm install
   node server.js
   ```
   The backend should be running on http://localhost:5000 (or another port if specified).
3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   The frontend should be running on http://localhost:3000.
