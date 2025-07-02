import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "../src/auth/AuthContext";
import { useAuth } from "../src/auth/AuthContext";
import LandingPage from "../src/pages/LandingPage";
import AuthPage from "../src/auth/Login";
import SignUp from "../src/auth/SignUp"
import TemplateSelection from "../src/components/TemplateSelection";
import ResumeBuilder from "../src/components/ResumeBuilder";
import "./App.css";

function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-teal-100 to-gray-100 background-colour">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return currentUser ? children : <Navigate to="/auth" />;
}

function AppRoutes() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route path="/" element={currentUser ? <Navigate to="/templates" /> : <LandingPage />} />
      <Route path="/auth" element={currentUser ? <Navigate to="/templates" /> : <AuthPage />} />
      <Route path="/signup" element={currentUser ? <Navigate to="/templates" /> : <SignUp />} />


      <Route
        path="/templates"
        element={
          <ProtectedRoute>
            <TemplateSelection />
          </ProtectedRoute>
        }
      />
      <Route
        path="/builder/:templateId"
        element={
          <ProtectedRoute>
            <ResumeBuilder />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App min-h-screen background-colour">
          <div className="max-w-7xl mx-auto py-8">
            <AppRoutes />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;