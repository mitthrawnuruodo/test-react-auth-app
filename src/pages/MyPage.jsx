import { useAuth } from "../context/AuthContext";

const MyPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>My Page</h2>
      {user ? (
        <p>Welcome, {user.name}! This is your dashboard.</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default MyPage;
