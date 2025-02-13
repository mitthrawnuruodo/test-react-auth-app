import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    if (login(username, password)) {
      navigate("/mypage"); // Redirect if successful
    } else {
      alert("Invalid credentials!"); // Handle login failure
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;