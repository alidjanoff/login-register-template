import React from "react";

// Router
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import OtpConfirmation from "./pages/OtpConfirmation";
import NotFound from "./pages/NotFound";
import ChangeProfileImage from "./pages/ChangeProfileImage";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/otp-confirmation" element={<OtpConfirmation />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/change-profile-image" element={<ChangeProfileImage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
