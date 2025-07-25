import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import ResumeImage from "../assets/resume.png";
import Logo from "../assets/resumelogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Validation functions
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, and 1 number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
};

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/templates";

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation (only if not in forgot password mode)
    if (!showForgotPassword) {
      if (!formData.password) {
        newErrors.password = "Password is required";
        isValid = false;
      } else if (!validatePassword(formData.password)) {
        newErrors.password =
          "Password must be at least 8 characters long and include uppercase, lowercase, number";
        isValid = false;
      }
    }

    setValidationErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    try {
      setError("");
      setLoading(true);
      setSuccessMessage("");
      if (showForgotPassword) {
        await resetPassword(formData.email);
        toast.success("Password reset email sent. Please check your inbox.", {
          autoClose: 5000,
        });
        setShowForgotPassword(false);
      } else {
        await login(formData.email, formData.password);
        toast.success("Login successful! Redirecting...", {
          autoClose: 2000,
          onClose: () => navigate(from, { replace: true }),
        });
      }
    } catch (error) {
      let errorMessage = "An error occurred during login";
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "No account found with this email";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again";
          break;
        case "auth/invalid-email":
          errorMessage = "Please enter a valid email address";
          break;
        default:
          errorMessage = error.message;
      }
      toast.error(errorMessage, {
        autoClose: 5000,
      });

      setError(error.message);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      setError("");
      setLoading(true);
      await loginWithGoogle();
      toast.success("Google login successful! Redirecting...", {
        autoClose: 2000,
        onClose: () => navigate(from, { replace: true }),
      });
    } catch (error) {
      let errorMessage = "Google login failed";
      if (error.code === "auth/popup-closed-by-user") {
        errorMessage = "Google sign-in was cancelled";
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        errorMessage = "This email is already registered with another method";
      }
      toast.error(errorMessage, {
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="min-h-screen bg-white rounded-lg flex flex-col md:flex-row">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-8 grid grow grid-cols-[1fr_min(1200px, _100%)_1fr] space-y-12">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="bg-white rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <img
                  className="w-10 h-10"
                  src={Logo}
                  alt="Resumepire Logo"
                  aria-label="Resumpire Logo"
                />
                <span className="text-2xl font-bold text-blue-500 italic">
                  ResumePire
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gradient">
                {showForgotPassword ? "Reset Password" : "Welcome Back"}
              </h2>
              <p className="text-blue-500 mt-2">
                {showForgotPassword
                  ? "Enter your email to receive a password reset link"
                  : "Sign in to access your resume templates"}
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-4">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md mb-4">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                  required
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.email}
                  </p>
                )}
              </div>

              {!showForgotPassword && (
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 px-4 rounded-md transition-colors"
              >
                {loading
                  ? "Please wait..."
                  : showForgotPassword
                  ? "Send Reset Link"
                  : "Sign In"}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              {showForgotPassword ? (
                <button
                  onClick={() => setShowForgotPassword(false)}
                  className="text-blue-600 hover:underline"
                >
                  Back to Sign In
                </button>
              ) : (
                <div className="space-y-2">
                  <div>
                    <button
                      onClick={() => setShowForgotPassword(true)}
                      className="text-blue-600 hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div>
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-blue-600 hover:underline"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {!showForgotPassword && (
              <div className="mt-6">
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleGoogleSignIn}
                  className="w-full flex items-center justify-center text-blue py-2 px-4 rounded-md transition-colors shadow-2xl border border-blue-500"
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with Google
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 bg-blue-50 min-h-screen items-center justify-center p-8 hidden sm:flex">
        <div className="grid grow grid-cols-[1fr_min(1200px, _100%)_1fr] space-y-12">
          <img
            src={ResumeImage}
            alt="Resume Example"
            className="w-full h-auto max-h-[32rem] object-contain rounded-lg"
          />
          </div>
        </div>
      </div>
    </div>
  );
}
