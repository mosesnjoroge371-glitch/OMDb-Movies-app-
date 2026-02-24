export default function ForgotPassword() { 
    return (
      <div className="auth">
        <h2>Reset Password</h2>
        <form className="auth-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Send Reset Link</button>
          <p className="auth-links">
            <a href="/login">Back to Login</a>
          </p>
          Remembered your password? <a href="/login">Login</a>
        </form>
      </div>
    );
}