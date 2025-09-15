# 🎓 Student Marksheet Backend API

This is the complete **Node.js + Express.js + MongoDB** backend for a Student Marksheet Management System. It includes:

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- MVC Pattern
- CORS enabled
- Postman for API testing

---

## 🚀 Features

- ✅ Add, update, delete, and fetch student records
- ✅ Store marks for 5 subjects and auto-calculate percentage
- ✅ Pagination for student listing
- ✅ Unique email and roll number validation
- ✅ Protected API structure (easy to extend for auth)
- ✅ Clean RESTful endpoints

---

## 🚀 API Endpoints

👤 Student APIs

| Method | Endpoint              | Description                |
|--------|---------------------- |---------------------------|
| POST   | /api/students         | Create new student         |
| GET    | /api/students         | Get paginated students     |
| GET    | /api/students/:id     | Get student by ID          |
| PUT    | /api/students/:id     | Update student by ID       |
| DELETE | /api/students/:id     | Delete student by ID       |

---

### 📦 Example Student Object

```json
{
  "name": "Parth vora",
  "email": "parth@example.com",
  "rollNo": "101",
  "marks": {
    "sub1": 80,
    "sub2": 75,
    "sub3": 90,
    "sub4": 85,
    "sub5": 88
  }
}
```

---

🧪 How to Test with Postman

1. **Create Student** → POST `/api/students`
2. **Get Students (Paginated)** → GET `/api/students?page=1&limit=5`
3. **Get Student by ID** → GET `/api/students/:id`
4. **Update Student** → PUT `/api/students/:id`
5. **Delete Student** → DELETE `/api/students/:id`

---

📦 Environment Variables

Create a `.env` file:

```
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

---

## 🛠️ Installation & Setup

```bash
git clone https://github.com/VoraParth007/student-marksheet-backend.git
cd student-marksheet-backend
npm install
npm start
```

---

👨‍💻 Author

Your Name  
Backend Developer  
🔗 GitHub: https://github.com/VoraParth007
🔗 LinkedIn: https://www.linkedin.com/in/parth777

---
