import React, { useState } from "react";

export default function test() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const firstName = firstName.current.value;
    const lastName = lastName.current.value;
    const email = email.current.value;
    const password = password.current.value;

    const data = fetch("localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    return data.json();
  };

  return (
    <div className="register">
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setFirstName(e.target.value)} type="text" />
        <input onChange={(e) => setLastName(e.target.value)} type="text" />
        <input onChange={(e) => setEmail(e.target.value)} type="email" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
        <button className="btn btn-block">Sign up</button>
      </form>
    </div>

    //   type="text"
    //       placeholder="Enter your email..."
    //     />
    //     <label>Password</label>
    //     <input
    //       className="registerInput"
    //       type="password"
    //       placeholder="Enter your password..."
    //     />
    //     <button className="registerButton">Register</button>
    //   </form>
    //   <Link to="/" className="link">
    //     LOGIN
    //   </Link>

    //    </div>
  );
}
