# Todo List (HTML, CSS, JavaScript)

A **browser-based, user-friendly Todo List** built using **vanilla HTML, CSS, and JavaScript**. This version focuses on a clean, responsive UI and persistent storage using the browser’s **LocalStorage**, allowing todos to remain available even after refreshing or closing the browser.

---

## 📌 Features

- ➕ Add new todos using button or **Enter key**
- 📋 View all todos in a clean card-style list
- ✅ Mark todos as completed using a **circle tick button**
- ❌ Delete todos instantly
- 💾 Persistent storage using **LocalStorage** (todos remain after refresh)
- 📱 Responsive layout for mobile and desktop
- 🎨 Clean, minimal, app-like UI

---

## 🧠 System Design Overview

This application follows a **single-layer frontend architecture with local persistence**:

### In-Memory Layer (Runtime)
- Todos are stored in a JavaScript array:
  ```js
  let todos = [];
  ```
- All UI operations modify this array

### Persistent Layer (Browser Storage)
- Todos are saved using:
  ```js
  localStorage.setItem('todos', JSON.stringify(todos));
  ```
- Todos are loaded when the page starts:
  ```js
  JSON.parse(localStorage.getItem('todos'))
  ```

### Data Flow

```
Page Load
   ↓
Load todos from LocalStorage → Store in todos[]
   ↓
Render todos to UI
   ↓
User performs actions (add / complete / delete)
   ↓
Update todos[] → Save to LocalStorage → Re-render UI
```

---

## 📁 Project Structure

```
TodoListGUI/
│
├── index.html   # Main HTML structure
├── style.css   # UI styling and responsive design
├── index.js    # Application logic and persistence
└── README.md   # Project documentation
```

---

## 🛠️ How to Run

### Requirements
- Any modern web browser (Chrome, Edge, Firefox)
- No server or installation required

### Steps

1. Download or clone the project folder
2. Open `index.html` in a browser
3. Start adding todos 🎉

---

## 🎮 How to Use

### Add a Todo
- Type a todo in the input field
- Press **Enter** or click **Add Todo**

### Complete a Todo
- Click the **green circle button** next to a todo
- The todo will be marked as completed with a tick and strikethrough

### Delete a Todo
- Click the **Delete** button next to the todo

### Persistence
- Refresh or close the browser
- Todos will remain saved automatically

---

## ⚙️ Key Design Decisions

### 1. Vanilla JavaScript (No Frameworks)
- Keeps the system lightweight
- Demonstrates strong fundamentals
- Easy to understand and extend

### 2. LocalStorage for Persistence
- Eliminates need for backend/server
- Portable and fast

### 3. Flexbox-Based Layout
- Ensures buttons stay aligned
- Handles long todo titles gracefully
- Adapts to different screen sizes

### 4. Event-Driven UI
- Button clicks and keypress events control all logic
- Centralized render function ensures consistent UI updates

---

## 🏗️ Code Architecture

### Core Components

- `todos[]` → Single source of truth
- `renderTodos()` → Updates UI from data
- `saveTodos()` → Saves to LocalStorage
- `addTodo()` → Creates new todo objects
- Event listeners → Handle user interaction

This pattern follows the same principles used in modern frameworks like **React and Vue**, implemented using plain JavaScript.

---

## 🚀 Future Enhancements (Optional)

- 🔍 Search and filter todos
- ✏️ Edit existing todos
- 🌓 Dark/Light mode toggle
- 📅 Add due dates and priority levels
- 🌐 Connect to a backend API (Node.js / C++) for cloud storage

---

## 🏆 Learning Outcomes

By building this project, I gained experience in:

- Frontend application design
- State management using JavaScript arrays
- Browser-based persistence with LocalStorage
- Responsive UI design using Flexbox
- Event-driven programming
- Debugging layout and rendering issues

---

## 👤 Author

**Nithish Kumar Goud**  
Second-Year Computer Science Student

---

## 📄 License

This project is open for educational and personal learning use. You are free to modify and extend it for academic or portfolio purposes.

---

> "This project demonstrates how a lightweight browser-based system can implement the same core concepts as a backend-driven application, including persistence, state management, and clean UI design."

#