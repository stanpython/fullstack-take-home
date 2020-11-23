import React from 'react';

import '../stylesheets/Signin.css';

const Signin = ({ user, login }) => {
  return (
    <div className="Signin">
      <form onSubmit={login}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Signin;
