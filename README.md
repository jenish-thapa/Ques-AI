# QUESS AI

## Overview

This project is a web-based application that allows users to manage projects and store transcripts within those projects. Users can log in, create, edit, and delete projects and their associated transcripts. The application is built using React for the front end and Express.js for the back end.

## Features

- User Authentication: Users can sign up and log in to manage their projects and transcripts.
- Project Management: Create, edit, and delete projects.
- Transcript Management: Within each project, users can add, edit, and delete transcripts.
- Protected Routes: Ensures that only authenticated users can access certain pages and functionalities.
- Responsive Design: The application is fully responsive, providing a seamless experience across all devices.

## Technologies Used

- Frontend: React, React Router, Redux
- Backend: Express.js, Node.js
- Database: MongoDB
- Authentication: JWT (JSON Web Token)
- Deployment: Vercel for the frontend, (mention any service used for backend deployment)

## Project Setup

1.  **Clone the Repository**

```bash
git clone https://github.com/jenish-thapa/Ques-AI.git
```

### Backend Setup

2. **Install Dependencies**

   ```bash
   cd server
   npm install
   npm run dev
   ```

3. **Set Up Environment Variables**

   ```bash
   cp .env.example .env
   ```

### Frontend Setup

2. **Install Dependencies**

   ```bash
   cd client
   npm install
   npm run dev
   ```

3. **Set Up Environment Variables**

   ```bash
   cp .env.example .env
   ```
