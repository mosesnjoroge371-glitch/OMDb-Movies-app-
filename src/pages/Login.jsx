import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    login(email); // fake login
    navigate("/"); // go to home
  };

  return (
    <div className="auth">
      <h2>Login</h2>

      <form className="auth-form" onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" placeholder="Password" required />

        <button type="submit">Login</button>

        <p className="auth-links">
          <Link to="/forgot">Forgot password?</Link>
        </p>

        <p className="auth-links">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
