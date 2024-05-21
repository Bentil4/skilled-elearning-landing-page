import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import dark_logo from './asset/logo-dark.svg';

function LandingPage() {
  return (
    <section>
      <div className="nav-bar">
        <img src={dark_logo} alt="dark logo" />
        <button className="">Get Started</button>
      </div>

      <div className="max-skill">
        <div className="max-skill-left">
          <h3>Maximize skill, minimize budget</h3>
          <p>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <button className="">Get Started</button>
        </div>
        <div className="max-skill-right"></div>
      </div>
      <main></main>
    </section>
  );
}

// const FirstName = () => <h1>Emmanuel</h1>;
// const LastName = () => {
//   return <h1>Mensah</h1>;
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<LandingPage />);
