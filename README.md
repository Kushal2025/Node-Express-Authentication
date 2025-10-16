# 🧑‍💻 User Authentication App (Express + MongoDB + Tailwind)

A simple and elegant **User Authentication System** built with **Node.js**, **Express**, and **MongoDB**, featuring clean **Tailwind CSS** frontend pages for user registration, login, and profile viewing.

---

## 🚀 Features

- 🔐 **User Registration** with username, email, password, and age  
- 🔑 **User Login** using email and password  
- 👤 **Profile Page** displaying user details  
- 🧭 **Navigation between pages** (Register ↔ Login ↔ Profile)  
- 💾 **MongoDB Integration** for persistent user storage  
- 🎨 **Modern UI** built using Tailwind CSS (CDN version)  
- ⚙️ **Express.js Routing** with EJS templates  
- 🔒 Passwords stored securely using bcrypt  

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-------------|
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Frontend | EJS, Tailwind CSS |
| Authentication | bcrypt for hashing |
| View Engine | EJS |

---

## 📁 Folder Structure

```bash
📦 user-auth-app
├── 📂 models
│   └── userModel.js
│
├── 📂 public
│   └── style.css               # (optional static CSS or assets)
│
├── 📂 views
│   ├── create.ejs              # Registration page
│   ├── login.ejs               # Login page
│   └── profile.ejs             # Profile display page
│
├── .gitignore
├── app.js                      # Main Express server file
├── package.json
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Kushal2025/Node-Express-Authentication.git
2️⃣ Install dependencies
npm install
3️⃣ Set up MongoDB

Make sure MongoDB is running locally or use a cloud MongoDB URI (e.g., MongoDB Atlas).
Replace it in your connection code:
mongoose.connect("mongodb://127.0.0.1:27017/yourDatabaseName");
4️⃣ Run the server
node app.js
5️⃣ Open in your browser
http://localhost:3000
🧩 Pages Overview
| Page     | Route      | Description                 |
| -------- | ---------- | --------------------------- |
| Register | `/create`  | Create a new user           |
| Login    | `/login`   | Login existing user         |
| Profile  | `/profile` | Display logged-in user data |
🎨 UI Preview
| Page         | Screenshot                                 |
| ------------ | ------------------------------------------ |
| Registration | ✨ Glassmorphism form using Tailwind CSS    |
| Login        | 🔐 Matching login form with modern effects |
| Profile      | 👤 Clean user info card with logout button |
🛡️ Security Notes
Passwords are hashed using bcrypt before saving.
User data is validated before insertion.
Sensitive routes can be protected using sessions or JWT (extendable).
🔮 Future Enhancements
🔄 Implement JWT-based authentication
📸 Add profile picture upload
✉️ Add password reset via email
🌙 Dark/Light mode toggle
🧭 Navbar with logout and navigation links

📜 License
This project is open-source and available under the MIT License.

---

✅ **Ready to use:**  
Just paste this text into your `README.md` file — GitHub will automatically render all markdown (tables, emojis, and formatting) perfectly.
