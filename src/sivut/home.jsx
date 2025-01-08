import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Animal & Bird Directory</h1>
      <div>
        <Link to="/animals">
          <img src="/images/tiikeri.jpg" alt="Animals" style={{ width: '300px' }} />
        </Link>
        <Link to="/birds">
          <img src="/images/lintu.jpg" alt="Birds" style={{ width: '300px' }} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
