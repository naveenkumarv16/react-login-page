import { useState } from "react";

function App() {
  const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  return (
    <div className="container">
      <div className="form">
        <h2>Login page</h2>

        <input type="email"
         placeholder="Enter Email" 
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
         />

         <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>


      </div>
      </div>
  );
}
export default App;