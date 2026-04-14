import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="auth">
      <h2>Reset Password</h2>
      <form className="auth-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Send Reset Link</button>
        <p className="auth-links">
          <Link to="/login">Back to Login</Link>
        </p>
        <p className="auth-links">
          Remembered your password? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
