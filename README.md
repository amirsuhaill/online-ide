# Online IDE

A full-stack web-based Integrated Development Environment (IDE) that allows users to write, edit, and preview HTML, CSS, and JavaScript code in real-time. Built with React and Express.js, this application provides a seamless coding experience with live preview capabilities.

## ✨ Features

### 🔐 User Authentication
- **Secure Sign Up & Login**: User registration and authentication using JWT tokens
- **Password Encryption**: Passwords hashed with bcrypt for security
- **Protected Routes**: Authentication-required access to IDE and projects

### 📝 Code Editor
- **Monaco Editor Integration**: Powered by the same editor that powers VS Code
- **Multi-Language Support**: Separate editors for HTML, CSS, and JavaScript
- **Syntax Highlighting**: Language-specific syntax highlighting
- **Theme Toggle**: Switch between light and dark themes
- **Expandable Editor**: Full-screen mode for focused coding

### 🚀 Live Preview
- **Real-Time Rendering**: Instant preview of your code changes
- **Split View**: Side-by-side editor and preview pane
- **Auto-Refresh**: Automatic updates as you type (200ms debounce)

### 💾 Project Management
- **Create Projects**: Start new coding projects with default templates
- **Save Projects**: Auto-save with Ctrl+S keyboard shortcut
- **Load Projects**: Access and edit your saved projects
- **Delete Projects**: Remove unwanted projects
- **Project Listing**: View all your projects in grid or list view

### 🎨 User Interface
- **Responsive Design**: Works seamlessly across different screen sizes
- **Modern UI**: Clean and intuitive interface built with Tailwind CSS
- **Avatar Support**: User profile avatars using react-avatar
- **Toast Notifications**: User-friendly feedback with react-toastify
- **Icon Library**: Rich iconography with react-icons

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1**: Modern UI library with hooks
- **Vite**: Fast build tool and dev server
- **React Router DOM 6.26.1**: Client-side routing
- **Monaco Editor**: Code editor component
- **Tailwind CSS 3.4.10**: Utility-first CSS framework
- **React Icons**: Icon library
- **React Toastify**: Toast notifications
- **React Avatar**: User avatar component

### Backend
- **Node.js**: JavaScript runtime
- **Express.js 4.21.2**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose 8.6.1**: MongoDB object modeling
- **JWT (jsonwebtoken 9.0.2)**: Authentication tokens
- **bcryptjs 2.4.3**: Password hashing
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## 📁 Project Structure

```
online-ide/
├── backend/
│   ├── bin/
│   │   └── www                 # Server startup script
│   ├── models/
│   │   ├── userModel.js        # User schema and model
│   │   └── projectModel.js     # Project schema and model
│   ├── routes/
│   │   ├── index.js            # API routes
│   │   └── users.js            # User routes
│   ├── views/
│   ├── public/
│   ├── app.js                  # Express app configuration
│   ├── package.json
│   └── .env                    # Environment variables
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx          # Main navigation bar
    │   │   ├── EditiorNavbar.jsx   # Editor navigation bar
    │   │   ├── GridCard.jsx        # Grid view project card
    │   │   └── ListCard.jsx        # List view project card
    │   ├── pages/
    │   │   ├── Home.jsx            # Dashboard/Projects page
    │   │   ├── Login.jsx           # Login page
    │   │   ├── SignUp.jsx          # Registration page
    │   │   ├── Editior.jsx         # Code editor page
    │   │   └── NoPage.jsx          # 404 page
    │   ├── images/
    │   ├── App.jsx                 # Main app component
    │   ├── App.css                 # App styles
    │   ├── main.jsx                # Entry point
    │   ├── helper.js               # Helper functions/constants
    │   └── index.css               # Global styles
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd online-ide
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGODB_URL=your_mongodb_connection_string
   PORT=3000
   ```

4. **Set up the Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Update API Base URL**
   
   In `frontend/src/helper.js`, update the API base URL to match your backend:
   ```javascript
   export const api_base_url = "http://localhost:3000";
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:3000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

3. **Access the Application**
   
   Open your browser and navigate to the frontend URL (typically `http://localhost:5173`)

## 📡 API Endpoints

### Authentication
- `POST /signUp` - Register a new user
- `POST /login` - Authenticate user and get JWT token
- `POST /getUserDetails` - Get user information

### Projects
- `POST /createProject` - Create a new project
- `POST /getProjects` - Get all projects for a user
- `POST /getProject` - Get a specific project
- `POST /updateProject` - Update project code (HTML, CSS, JS)
- `POST /deleteProject` - Delete a project

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String,
  username: String,
  email: String,
  password: String,        // Hashed
  date: Date,              // Default: Date.now
  isBlocked: Boolean,      // Default: false
  isAdmin: Boolean         // Default: false
}
```

### Project Model
```javascript
{
  title: String,
  createdBy: String,       // User ID
  date: Date,              // Default: Date.now
  htmlCode: String,        // Default: HTML template
  cssCode: String,         // Default: CSS reset
  jsCode: String           // Default: console.log
}
```

## ⌨️ Keyboard Shortcuts

- **Ctrl + S**: Save current project

## 🎯 Usage

1. **Sign Up**: Create a new account with username, name, email, and password
2. **Login**: Sign in with your email and password
3. **Create Project**: Click "Create New Project" and give it a title
4. **Code**: Write HTML, CSS, and JavaScript in the respective tabs
5. **Preview**: See your code come to life in the live preview pane
6. **Save**: Press Ctrl+S to save your changes
7. **Manage**: View, edit, or delete your projects from the home page

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT-based authentication
- Protected routes requiring authentication
- CORS enabled for cross-origin requests
- Environment variables for sensitive data

## 🎨 UI Features

- Dark mode by default with light mode toggle
- Responsive grid and list views for projects
- User avatars in navigation
- Toast notifications for user feedback
- Smooth transitions and modern design

## 🚧 Future Enhancements

- Real-time collaboration
- Code sharing and export
- More language support (Python, TypeScript, etc.)
- Code snippets and templates
- Version control integration
- File upload and asset management
- Code formatting and linting
- Terminal integration

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ by developers, for developers.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Happy Coding! 🚀**
