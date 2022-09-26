import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>LOL Chat</span>
      <div className='user'>
        <img src='https://avatars.githubusercontent.com/u/60649315?v=4' alt/>
        <span>Lyakhnovich</span>
        <button className='button'>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;