import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Example color scheme
const COLORS = {
  primary: "#ff6f3c",
  secondary: "#ff9a3c",
  accent: "#ffc93c",
  background: "#232931",
  card: "#393e46",
  text: "#eeeeee",
  input: "#393e46",
  placeholder: "#bdbdbd",
  error: "#ff3c3c",
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.background} 100%)`,
        transition: "background 0.5s",
      }}
    >
      <form
        className="shadow-2xl rounded-3xl px-10 py-12 w-full max-w-md flex flex-col items-center animate-fadeIn"
        style={{
          background: COLORS.card,
          boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.37)`,
          border: `1.5px solid ${COLORS.primary}`,
        }}
        onSubmit={handleLogin}
      >
        <h2
          className="text-4xl font-extrabold mb-4 tracking-tight"
          style={{
            color: COLORS.primary,
            textShadow: "0 2px 8px rgba(255,111,60,0.2)",
          }}
        >
          Welcome Back!
        </h2>
        <p className="mb-8 text-lg" style={{ color: COLORS.text, opacity: 0.8 }}>
          Sign in to continue to <span style={{ color: COLORS.accent, fontWeight: 700 }}>Food King</span>
        </p>

        <div className="flex flex-col w-full gap-5">
          <input
            type="email"
            name="email"
            required
            className="h-12 w-full rounded-lg px-4 focus:ring-4 transition"
            style={{
              background: COLORS.input,
              color: COLORS.text,
              border: `1.5px solid ${COLORS.secondary}`,
              outline: "none",
              fontSize: "1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            }}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            required
            className="h-12 w-full rounded-lg px-4 focus:ring-4 transition"
            style={{
              background: COLORS.input,
              color: COLORS.text,
              border: `1.5px solid ${COLORS.secondary}`,
              outline: "none",
              fontSize: "1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            }}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <div className="mt-4 text-center" style={{ color: COLORS.error, fontWeight: 600 }}>
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-full px-8 py-3 mt-8 font-bold text-lg shadow-lg transition-all duration-300"
          style={{
            background: `linear-gradient(90deg, ${COLORS.primary} 60%, ${COLORS.secondary} 100%)`,
            color: COLORS.text,
            letterSpacing: "1px",
            boxShadow: `0 4px 16px 0 ${COLORS.primary}44`,
            transform: "scale(1)",
          }}
          onMouseOver={e => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          Sign In
        </button>

        <div className="mt-8 w-full text-center">
          <p className="text-gray-400 text-sm mb-3">Or sign in with</p>
          <div className="flex justify-center gap-5">
            <button
              type="button"
              className="rounded-full p-3 shadow-md transition-all"
              style={{
                background: "#fff",
                color: "#ea4335",
                fontWeight: 700,
                border: "none",
                fontSize: "1.1rem",
                boxShadow: "0 2px 8px rgba(234,67,53,0.08)",
              }}
              aria-label="Sign in with Google"
            >
              <span role="img" aria-label="Google">🔍</span> Google
            </button>
            <button
              type="button"
              className="rounded-full p-3 shadow-md transition-all"
              style={{
                background: "#fff",
                color: "#1877f3",
                fontWeight: 700,
                border: "none",
                fontSize: "1.1rem",
                boxShadow: "0 2px 8px rgba(24,119,243,0.08)",
              }}
              aria-label="Sign in with Facebook"
            >
              <span role="img" aria-label="Facebook">📘</span> Facebook
            </button>
            <button
              type="button"
              className="rounded-full p-3 shadow-md transition-all"
              style={{
                background: "#fff",
                color: "#1da1f2",
                fontWeight: 700,
                border: "none",
                fontSize: "1.1rem",
                boxShadow: "0 2px 8px rgba(29,161,242,0.08)",
              }}
              aria-label="Sign in with Twitter"
            >
              <span role="img" aria-label="Twitter">🐦</span> Twitter
            </button>
          </div>
        </div>

        <div className="mt-8 text-center w-full">
          <span className="text-gray-400">Don't have an account? </span>
          <button
            className="text-pink-600 font-semibold hover:underline"
            onClick={() => navigate('/register')}
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
