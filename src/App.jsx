import { useState } from "react";
import loginImg from "./assets/images/login.jpg";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("All fields are required");
    } else if (!email.includes("@")) {
      setError("Enter a valid email");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
      alert("Login successful");
    }
  };

  return (
    <div className="container">
      <div className="form " style={{
    backgroundImage: `url(${loginImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
        
        <div className="form-overlay">
          <h2>Login</h2>
        </div>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default App;