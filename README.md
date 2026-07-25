# 🚀 LeadDesk Mini

A full-stack Lead Management System built with the MERN Stack as part of the Digital Heroes Training Assignment.

---

## 🌐 Live Demo

### Frontend

https://lead-desk-orcin.vercel.app

### Backend

https://leaddesk-mjce.onrender.com

---

## 📸 Screenshots

### Landing Page

<img width="1888" height="910" alt="image" src="https://github.com/user-attachments/assets/35f7f9a8-754c-4787-aebc-2e1c9a711148" />


### Admin Dashboard

<img width="1572" height="801" alt="image" src="https://github.com/user-attachments/assets/c53d99e6-4138-4730-a4d1-ef99d3345046" />


---

# Features

## Public Landing Page

- Submit new business leads
- Client-side validation
- Server-side validation
- Responsive UI

## Admin Dashboard

- Secure Login (JWT Authentication)
- View all leads
- Search leads
- Filter by status
- Update lead status
- Dashboard statistics
- Logout

---

# Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- React Hot Toast

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- JWT
- HTTP-only Cookies

---

# Folder Structure

```
LeadDesk-Mini/
│
├── client/
│
├── server/
│
└── README.md
```

---

# API Endpoints

## Authentication

POST /api/auth/login

GET /api/auth/me

POST /api/auth/logout

---

## Leads

POST /api/leads

GET /api/leads

PATCH /api/leads/:id/status

---

# Database Schema

## Admin

```javascript
{
 email,
 password
}
```

## Lead

```javascript
{
 name,
 email,
 budget,
 message,
 status,
 createdAt
}
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Sujalpatil-2007/LeadDesk.git
```

---

## Backend

```bash
cd server

npm install

npm run dev
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

# Environment Variables

## Server

```
PORT=5000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret

CLIENT_URL=http://localhost:5173
```

## Client

```
VITE_API_URL=http://localhost:3000/api
```

---

# Test Credentials

Email

```
patilsujalvr4@gmail.com
```

Password

```
sujal@2007
```

---

# Authentication Flow

1. Admin logs in.
2. Server validates credentials.
3. JWT token is generated.
4. Token is stored in an HTTP-only cookie.
5. Protected routes verify the JWT before granting access.

---

# Future Improvements

- Pagination
- Export Leads
- Email Notifications
- Lead Details Page

---

## Built for

Digital Heroes Training Assignment

Developed by **Sujal Patil**
