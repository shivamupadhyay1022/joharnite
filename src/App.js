import './App.css';
import React from "react"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthProvider';
import Dashboard from './authpages/Dashboard'
import SignUp from './authpages/Signup';
import Login from './authpages/Login';
import Profile from './pages/profile';
import SignUpJohar from './authpages/Signupjohar';
import SignUpMaghe from './authpages/Signupmaghe';
import Invoice from './components/Invoice';

function App() {
  return (

    <AuthProvider>
    <div className="bg-primary w-full overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Dashboard />} />
          <Route exact path="#testimonials" element={<Dashboard />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signupjohar" element={<SignUpJohar />} />
          <Route exact path="/signupmaghe" element={<SignUpMaghe />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/print" element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </div>
  </AuthProvider>

  );
}

export default App;
