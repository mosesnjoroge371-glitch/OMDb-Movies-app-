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
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    );
 }