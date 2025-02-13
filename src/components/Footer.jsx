import { useAuth } from "../context/AuthContext";
import { Link } from "react-router";

const Footer = () => {
  const { user } = useAuth();
  return (
    <footer>
      <hr />
      <p>&copy; 2025 My App</p>
      {user && <Link to="/mypage">My Page</Link>}
    </footer>
  );
};

export default Footer;
