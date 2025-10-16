# 🧑‍💻 User Authentication App

A simple and elegant **User Authentication System** built with **Node.js**, **Express**, and **MongoDB**, featuring clean **Tailwind CSS** frontend pages for user registration, login, and profile viewing.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🚀 Features

- 🔐 **User Registration** with username, email, password, and age
- 🔑 **User Login** using email and password
- 👤 **Profile Page** displaying user details
- 🧭 **Navigation between pages** (Register ↔ Login ↔ Profile)
- 💾 **MongoDB Integration** for persistent user storage
- 🎨 **Modern UI** built using Tailwind CSS (CDN version)
- ⚙️ **Express.js Routing** with EJS templates
- 🔒 **Passwords stored securely** using bcrypt

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Frontend** | EJS, Tailwind CSS |
| **Authentication** | bcrypt for hashing |
| **View Engine** | EJS |

---

## 📁 Folder Structure

```
📦 user-auth-app
├── 📂 models
│   └── userModel.js          # User schema definition
│
├── 📂 public
│   └── style.css             # Optional static CSS or assets
│
├── 📂 views
│   ├── create.ejs            # Registration page
│   ├── login.ejs             # Login page
│   └── profile.ejs           # Profile display page
│
├── .gitignore
├── app.js                    # Main Express server file
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Kushal2025/Node-Express-Authentication.git
cd Node-Express-Authentication
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set up MongoDB

Make sure MongoDB is running locally or use a cloud MongoDB URI (e.g., [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

Update the connection string in `app.js`:

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/yourDatabaseName");
```

### 4️⃣ Run the server

```bash
node app.js
```

### 5️⃣ Open in your browser

Navigate to:

```
http://localhost:3000
```

---

## 🧩 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Register** | `/create` | Create a new user account |
| **Login** | `/login` | Login with existing credentials |
| **Profile** | `/profile` | Display logged-in user data |

---

## 🎨 UI Preview

| Page | Description |
|------|-------------|
| **Registration** | ✨ Glassmorphism form using Tailwind CSS |
| **Login** | 🔐 Matching login form with modern effects |
| **Profile** | 👤 Clean user info card with logout button |

---

## 🛡️ Security Notes

- ✅ Passwords are **hashed using bcrypt** before saving
- ✅ User data is **validated** before insertion
- ✅ Sensitive routes can be protected using **sessions or JWT** (extendable)

---

## 🔮 Future Enhancements

- [ ] 🔄 Implement **JWT-based authentication**
- [ ] 📸 Add **profile picture upload**
- [ ] ✉️ Add **password reset via email**
- [ ] 🌙 **Dark/Light mode** toggle
- [ ] 🧭 Navbar with **logout and navigation links**
- [ ] ⚡ **Session management** with express-session
- [ ] 🔔 **Flash messages** for user feedback

---

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^7.0.0",
  "bcrypt": "^5.1.0",
  "ejs": "^3.1.9",
  "body-parser": "^1.20.2"
}
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Kushal**

- GitHub: [@Kushal2025](https://github.com/Kushal2025)

---

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

**Made with ❤️ using Node.js and Express**
