import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="auth">
      <h2>Create Account</h2>
      <form className="auth-form">
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>

        <p className="auth-links">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
