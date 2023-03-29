import React, { useState } from 'react';
import Dashboard from './Dashboard';

const Emplogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Send login request to server and handle response
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <>
     {/* <ul className="nav">
     <img src="https://tse3.explicit.bing.net/th?id=OIP.SfF0y9-kEv9WG2_yhjV5kwAAAA&pid=Api&P=0" alt="" />
     </ul> */}
    <div className='container'>
    <form onSubmit={handleLogin}>
    <h1>Login page</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit" >Login</button> 
      {/* <button className="sub" type="submit">
            {editingIndex !== null ? "Login" : "Dashboard"}
          </button> */}
    </form>
    </div>
    <Dashboard/>
    </>
  );
};

export default Emplogin;
