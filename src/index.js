import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import dark_logo from './asset/logo-dark.svg';
import light_logo from './asset/logo-light.svg';
import animationIcon from './asset/icon-animation.svg';
import designIcon from './asset/icon-design.svg';
import photographyIcon from './asset/icon-photography.svg';
import cryptoIcon from './asset/icon-crypto.svg';
import businessIcon from './asset/icon-business.svg';

function LandingPage() {
  return (
    <section>
      <nav>
        <div className="nav-bar">
          <img src={dark_logo} alt="dark logo" />
          <button className="btn-1">Get Started</button>
        </div>
      </nav>

      <span>
        <div className="max-skill">
          <div className="max-skill-left">
            <h3>Maximize skill, minimize budget</h3>
            <p>
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <button className="">Get Started</button>
          </div>
          <div className="max-skill-right"></div>
        </div>
      </span>

      <main>
        <div className="main-cont">
          <FirstCard className="all-cards" />

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
      </main>

      <footer>
        <div>
          <img src={light_logo} alt="white-logo" />
          <button>Get Started</button>
        </div>
      </footer>
    </section>
  );
}

const secondCard = {
  img: animationIcon,
  title: 'Animation',
  message:
    'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
  getStarted: 'Get Started',
};
const thirdCard = {
  img: designIcon,
  title: 'Design',
  message:
    'Create beautiful, usable interfaces to help shape the future of how the web looks.',
  getStarted: 'Get Started',
};

const fourthCard = {
  img: photographyIcon,
  title: 'Photography',
  message:
    'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
  getStarted: 'Get Started',
};

const fifthCard = {
  img: cryptoIcon,
  title: 'Crypto',
  message:
    'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
  getStarted: 'Get Started',
};

const sixthCard = {
  img: businessIcon,
  title: 'Business',
  message:
    'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
  getStarted: 'Get Started',
};

const FirstCard = () => {
  return (
    <div className="cards all-cards">
      <h4>Check out our most popular courses!</h4>
    </div>
  );
};

const SecondCard = (props) => {
  return (
    <article className="secondCards all-cards">
      <img src={props.img} alt={props.title} />
      <p className='title'>{props.title}</p>
      <p className="mgs">{props.message}</p>
      <p className="start">{props.getStarted}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<LandingPage />);
