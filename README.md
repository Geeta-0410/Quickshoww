# 🎬 QuickShow – Movie Ticket Booking Web Application

QuickShow is a modern, full-stack movie ticket booking web application that allows users to explore movies, view details, select show timings, choose seats, and manage bookings with a clean and cinematic user experience.

Built with **React.js** and a scalable component-based architecture, QuickShow focuses on performance, usability, and real-world booking flow similar to platforms like BookMyShow.

---
## 🚀 Live Preview

🔗 **QuickShow – Live Website:**  
https://quickshoww-hycf.vercel.app/


---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](screenshots/<img width="1915" height="868" alt="Screenshot 2026-01-06 124943" src="https://github.com/user-attachments/assets/338b74dd-a9b8-4fd1-b938-106e3ee993b1" />
home.png)

### 🎞️ Movies Listing
![Movies](screenshots/movies.png)
<img width="1885" height="854" alt="Screenshot 2026-01-06 125001" src="https://github.com/user-attachments/assets/79a1fc64-d7a9-4f80-b999-116e9efb1453" />

### 🎥 Movie Details
![Movie Details](screenshots/movie-details.png)<img width="1866" height="854" alt="Screenshot 2026-01-06 125025" src="https://github.com/user-attachments/assets/6f9d410a-cec4-4919-8ff6-e3355e0d88ec" />


### 💺 Seat Selection
![Seat Selection](screenshots/seat-selection.png)<img width="1887" height="861" alt="Screenshot 2026-01-06 125051" src="https://github.com/user-attachments/assets/3b00e117-b78d-457d-a6df-ba1ea70b55da" />


### 🔐 Authentication (Clerk)
![Login Modal](screen<img width="1904" height="831" alt="Screenshot 2026-01-06 125130" src="https://github.com/user-attachments/assets/a260efd5-475d-45b3-88a2-2c609f291aac" />
shots/login.png)

### 📑 My Bookings
![My Bookings](screenshots/my-boo<img width="1911" height="869" alt="Screenshot 2026-01-06 125107" src="https://github.com/user-attachments/assets/7447fddc-5b3d-4e9b-abcd-663b52c132ed" />
kings.png)

> 📌 **Note:** Place all screenshots inside a `screenshots/` folder in your repository.

---

## ✨ Features

### 👤 User Features
- Browse latest and trending movies
- View movie details (genre, duration, release year)
- Select show timings
- Interactive seat selection layout
- Secure authentication (Google / Email)
- View booking history
- Responsive UI for all screen sizes

### 🎟️ Booking System
- Dynamic seat availability
- Real-time seat selection
- Price calculation based on seats
- Booking summary before checkout

### 🔐 Authentication
- Clerk authentication integration
- Google sign-in support
- Protected routes for bookings & favourites

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **React Router**
- **CSS / Tailwind-like styling**
- **Reusable UI Components**

### Authentication
- **Clerk (Auth Provider)**

### Utilities
- Custom date & time formatting
- ISO time conversion
- Seat & ticket helpers

---

## 📁 Project Structure

client/
│── src/
│ ├── assets/
│ ├── components/
│ │ ├── admin/
│ │ ├── Navbar.jsx
│ │ ├── MovieCard.jsx
│ │ ├── HeroSection.jsx
│ │ └── Footer.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Movies.jsx
│ │ ├── MovieDetails.jsx
│ │ ├── MyBooking.jsx
│ │ └── Favourite.jsx
│ ├── lib/
│ │ ├── dateFormat.js
│ │ ├── timeFormat.js
│ │ └── KConverter.js
│ └── App.jsx


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Geeta-0410/quickshow.git

cd quickshow/client

npm start


http://localhost:3000

REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_key_here


