import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && email && password) {
      // Simulate login success

      window.thriveStack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
      window.thriveStack.setGroup("{Group_Id}", "{Group_Domain}", "{Group_Name}");
      /* eg: thriveStack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c","john.doe@acme.xyz");*/
      /* eg: thriveStack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com","Acme Corporation");*/
      /* eg: thriveStack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c","john.doe@acme.xyz");*/
      window.thriveStack.reportEmailAbuse("{User_Email}");
      /* eg: thriveStack.setUser("john.doe@acme.xyz");*/
      navigate('/product');
      onLogin();
    } else {
      alert('Please enter username, email, and password.');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
