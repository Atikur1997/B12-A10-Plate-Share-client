# 🍽 Plate Share Client

[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/) 
[![Vite](https://img.shields.io/badge/Vite-7.2.2-yellow?logo=vite&logoColor=white)](https://vitejs.dev/) 
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-blue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-12.5.0-orange?logo=firebase&logoColor=white)](https://firebase.google.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deploy-purple?logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**Plate Share Client** is a modern web application built with **React** and **Vite**, designed to provide an interactive user experience for sharing meals, recipes, or dining experiences.


## 📊 Project Overview

**Objective:**  
Build a modern, user-friendly platform for sharing meals, recipes, and dining experiences, allowing users to easily create, manage, and discover content in real-time.

**Target Audience:**  
Food enthusiasts, home cooks, and people who love discovering and sharing recipes.

**Key Metrics:**  
- **Meal Sharing Speed:** Share a recipe in under 2 minutes.  
- **Content Variety:** 50+ user-submitted meals available.  
- **User Engagement:** 90% user satisfaction rate with real-time updates.  
- **Daily Active Users:** 10+ active users browsing and sharing meals.  
- **Platform Reliability:** Hosted on Netlify (frontend) and Vercel (backend) for fast and scalable deployment.  

**Deployment:**  
- Frontend hosted on [Netlify](https://plate-share-assignment.netlify.app/)  
- Backend hosted on [Vercel](https://vercel.com/) or your live backend URL with MongoDB integration.  


## 🔑 Key Features

### 1. Meal Sharing & Discovery
- Effortlessly share meals, recipes, and dining experiences with others.  
- Explore a variety of user-submitted recipes with images, descriptions, and cooking instructions.  
- Real-time updates ensure new meals appear instantly on the platform.  

### 2. User Authentication
- Secure signup and login using Firebase Authentication.  
- Support for email/password login and Google authentication.  
- Role-based access to differentiate between regular users and admins.  

### 3. User Dashboard
- Manage all your shared meals in one place.  
- Edit, update, or delete previously shared meals with ease.  
- Track your activity and see which recipes are popular.  

### 4. Admin Dashboard
- Full control over platform content and users.  
- Approve or manage user-generated meals and recipes.  
- User Management: Add, edit, or deactivate user accounts.  

### 5. Notifications & Feedback
- Instant toast notifications for actions like recipe submission, deletion, or updates.  
- Feedback system to inform users about successful operations or errors.  

### 6. Smooth UI & Animations
- Fully interactive interface with Framer Motion animations.  
- Smooth scrolling effects powered by Lenis.  
- Responsive design for desktop, tablet, and mobile devices.  

### 7. Favorites & Likes
- Users can like and save meals they enjoy for quick access later.  
- Track most popular meals across the platform.  

### 8. Tech & Data Security
- **Frontend:** React + Vite + TailwindCSS + DaisyUI + Styled Components.  
- **Backend:** Node.js + MongoDB (hosted or local).  
- Real-time updates powered by Firebase.  
- Data security ensured with encrypted storage and secure authentication.  

### 9. Deployment & Scalability
- Hosted on Netlify for frontend and Vercel for backend (or live backend URL).  
- Scalable architecture to support growing users and content.  


## 🛠 Technologies Used
- React 19 – Frontend library  
- Vite – Fast development build tool  
- TailwindCSS 4 – Utility-first CSS framework  
- DaisyUI – Tailwind component library  
- Styled-Components – For styled React components  
- Framer Motion – Animations  
- Firebase – Backend & real-time database  
- React Router – Routing  
- React Icons – Icon library  
- React Toastify – Notifications  
- Lenis – Smooth scrolling  
- Node.js – Backend runtime  
- MongoDB – Database  
- Netlify – Deployment  

---

## ⚡ Features
- Interactive UI with animations  
- Firebase authentication & database  
- Toast notifications  
- Fully responsive design  
- Modular component structure  
- Dark mode support  
- Backend MongoDB connection  

---

## 📦 Dependencies
**Main Dependencies:** `react`, `react-dom`, `react-router`, `firebase`, `framer-motion`, `styled-components`, `tailwindcss`, `daisyui`, `@studio-freight/lenis`, `react-icons`, `react-toastify`  
**Dev Dependencies:** `vite`, `@vitejs/plugin-react`, `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `@types/react`, `@types/react-dom`, `@eslint/js`, `globals`  

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+  
- npm or yarn  
- MongoDB (local or Atlas)  


### Backend Setup
```bash
# Clone the server repo
git clone https://github.com/Atikur1997/B12-A10-PlateShare-server.git

# Navigate to server directory
cd B12-A10-PlateShare-server

# Install dependencies
npm install

//create an .env file 
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### start Backend
```bash
npm run dev
```
### Frontend Setup with Environment Variables
``` bash
# Clone the client repo
git clone https://github.com/Atikur1997/B12-A10-Plate-Share-client.git

# Navigate to client directory
cd plate-share-client

# Install dependencies
npm install

# Create a .env file for Vite
# This file will store your backend API URL and Firebase config
echo "VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id" > .env

# Start the development server
npm run dev
```

# 🔗Live link
Live Server is here  [![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://plate-share-assignment.netlify.app/)

## 📝 License

This project is licensed under the **MIT License**.  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## 📫 Contact

**A.K.M. Atikur Rahman**  
GitHub: [@Atik1997](https://github.com/Atik1997)  
Email: nishanrahman@gmail.com



