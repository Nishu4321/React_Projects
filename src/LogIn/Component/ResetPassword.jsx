import React, { useState } from "react";
import styles from "./ResetPassword.module.css";
import { users } from "./users";

const ResetPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === oldPassword
    );

    // In a real application, you would validate a token
    // Here we will just simulate a successful password reset
    if (user) {
      if (newPassword) {
        setMessage("Your password has been successfully reset.");
      } else {
        setMessage("Please enter a valid password.");
      }
    }
  };

  return (
    <div className={`${styles.mainDiv}`}>
      <div className={`${styles.sec_div}`}>
        <h2>Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Old Password:</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <label>Re-Enter New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
