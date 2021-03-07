import React from 'react';
import './Header.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://logospng.org/download/netflix/logo-netflix-2048.png" alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://ih1.redbubble.net/image.618405117.2432/flat,1000x1000,075,f.u2.jpg" alt="Usúario" />
        </a>
      </div>
    </header>
  )
}