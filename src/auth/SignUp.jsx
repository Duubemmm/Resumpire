import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import ResumeImage from "../assets/resume.png";
import Logo from "../assets/resumelogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, and 1 number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
};

const getPasswordStrength = (password) => {
  let strength = 0;

  // Length check
  if (password.length >= 8) strength++;

  // Contains uppercase
  if (/[A-Z]/.test(password)) strength++;

  // Contains lowercase
  if (/[a-z]/.test(password)) strength++;

  // Contains number
  if (/\d/.test(password)) strength++;

  return strength;
};

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/templates";

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value) error = "Full name is required";
        else if (value.length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!validateEmail(value)) error = "Please enter a valid email";
        break;
      case "password":
        if (!value) error = "Password is required";
        else if (!validatePassword(value)) {
          error =
            "Password must be 8+ chars with uppercase, lowercase, and number";
        }
        break;
      case "confirmPassword":
        if (!value) error = "Please confirm your password";
        else if (value !== formData.password) error = "Passwords don't match";
        break;
    }

    return error;
  };
  const handleBlur = (e) => {
    const { name } = e.target;
    const error = validateField(name, formData[name]);
    setValidationErrors((prev) => ({ ...prev, [name]: error }));
  };
  const validateForm = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
      confirmPassword: validateField(
        "confirmPassword",
        formData.confirmPassword
      ),
    };

    setValidationErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      toast.error("Please fix the form errors");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      await signup(formData.email, formData.password, formData.name);
      toast.success("Account created successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      let errorMessage = error.message;
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email already in use. Please use a different email.";
      } else if (error.code === "auth/weak-password") {
        errorMessage =
          "Password is too weak. Please choose a stronger password.";
      }
      toast.error(errorMessage);
      setError(error.message);
    }

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      setError("");
      setLoading(true);

      await loginWithGoogle();
      toast.success("Logged in successfully with Google!");
      navigate(from, { replace: true });
    } catch (error) {
      let errorMessage = error.message;
      if (error.code === "auth/popup-closed-by-user") {
        errorMessage = "Popup closed before completing sign in.";
      } else if (error.code === "auth/cancelled-popup-request") {
        errorMessage = "Sign in cancelled. Please try again.";
      }
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const PasswordStrengthIndicator = ({ password }) => {
    const strength = getPasswordStrength(password || "");
    const strengthText = [
      "Very Weak",
      "Weak",
      "Medium",
      "Strong",
      "Very Strong",
    ];

    return (
      <div className="mt-1">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 mx-0.5 rounded-sm ${
                i <= strength
                  ? i <= 2
                    ? "bg-red-500"
                    : i <= 3
                    ? "bg-yellow-500"
                    : "bg-green-500"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        {password && (
          <p
            className={`text-xs mt-1 ${
              strength <= 2
                ? "text-red-600"
                : strength <= 3
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            {strengthText[strength - 1]}
          </p>
        )}
      </div>
    );
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

      <div className="max-w-8xl bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="bg-white rounded-lg shadow-md p-8">
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
                Create Account
              </h2>
              <p className="text-blue-500 mt-2">
                Join thousands of professionals who trust us
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  onBlur={handleBlur}
                  className={`w-full px-3 py-2 border ${
                    validationErrors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="John Doe"
                  required
                />
                {validationErrors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.name}
                  </p>
                )}
              </div>

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
              </div>
              {validationErrors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {validationErrors.email}
                </p>
              )}

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
                <PasswordStrengthIndicator password={formData.password} />
                {validationErrors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.password}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 px-4 rounded-md transition-colors"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="text-center mt-4">
              Already have an account?{" "}
              <Link to="/auth" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </div>

            <div className="relative flex justify-center text-sm mt-6">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center text-blue py-2 px-4 rounded-md mt-4 transition-colors shadow-xl border border-blue-500"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 bg-blue-50 flex items-center justify-center p-8">
          <img
            src={ResumeImage}
            alt="Resume Example"
            className="w-full h-auto max-h-[32rem] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}