import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import dark_logo from './asset/logo-dark.svg';
import light_logo from './asset/logo-light.svg';

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

      {/* Middle sections */}
      <main>
        <div className="main-cont">
          <div className="card">
            <div className="cards">
              <FirstCard className="cards" />
            </div>
            <SecondCard
              className="s-cards"
              img={secondCard.img}
              title={secondCard.title}
              message={secondCard.message}
              getStarted={secondCard.getStarted}
            />

            <SecondCard
              img={thirdCard.img}
              title={thirdCard.title}
              message={thirdCard.message}
              getStarted={thirdCard.getStarted}
            />
          </div>
          <div className="card">
            <SecondCard
              img={fourthCard.img}
              title={fourthCard.title}
              message={fourthCard.message}
              getStarted={fourthCard.getStarted}
            />

            <SecondCard
              img={fifthCard.img}
              title={fifthCard.title}
              message={fifthCard.message}
              getStarted={fifthCard.getStarted}
            />

            <SecondCard
              img={sixthCard.img}
              title={sixthCard.title}
              message={sixthCard.message}
              getStarted={sixthCard.getStarted}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div>
          <img src={light_logo} alt="white-logo" />
          <button>Get Started</button>
        </div>
      </footer>
    </section>
  );
}

// const secondCards = () => {
//   return <div>

//   </div>;
// };

// Second Card
const secondCard = {
  img: './asset/icon-animation.svg',
  title: 'Animation',
  message:
    'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
  getStarted: 'Get Started',
};
const thirdCard = {
  img: './icon-design.svg',
  title: 'Design',
  message:
    'Create beautiful, usable interfaces to help shape the future of how the web looks.',
  getStarted: 'Get Started',
};

const fourthCard = {
  img: './icon-photography.svg',
  title: 'Photography',
  message:
    'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
  getStarted: 'Get Started',
};

const fifthCard = {
  img: './icon-crypto.svg',
  title: 'Crypto',
  message:
    'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
  getStarted: 'Get Started',
};

const sixthCard = {
  img: './asset/icon-business.svg',
  title: 'Business',
  message:
    'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
  getStarted: 'Get Started',
};

// First Card
const FirstCard = () => {
  return (
    <div className="all-cards">
      <h4>Check out our most popular courses!</h4>
    </div>
  );
};

const SecondCard = (props) => {
  return (
    <article className="secondCards all-cards">
      <img src={props.img} alt={props.title} />
      <h4>{props.title}</h4>
      <p className="mgs">{props.message}</p>
      <p className="start">{props.getStarted}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<LandingPage />);
