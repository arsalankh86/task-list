import React, { useState } from 'react';
import axios from 'axios';
import './CustomerForm.css'; 

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username !== '' && password !== '') {
      debugger;
   
   try{
      const response = await axios.post('https://localhost:7017/api/Authenticate/Login', { username, password });
      const customer = response.data;
      if(response.status === 200){
         // Extract the JWT token from the response
      const jwtToken = response.data.token;

      // Set the JWT token in the state
      localStorage.setItem("token",jwtToken);
      console.log('Login successful:', customer);
      onLogin();
      }
      else{
        alert('Invalid credentials. Please enter a username and password.');
      }
    }
    catch(ex){
      alert('Invalid credentials. Please enter a username and password.');
    }

    } else {
      alert('Invalid credentials. Please enter a username and password.');
    }
  };

  return (
    <><div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>    
      </div></>
  );
};

export default Login;
