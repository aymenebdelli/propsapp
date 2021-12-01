import React from 'react';
import Profile from './components/profile/Profile';
import './App.css';

function App() {
  const handleName = (e) => {
    e.preventDefault();
    alert('Aymen Ebdelli');
  };
  return (
    <div className='App'>
      <div className='wrapper'>
        <svg
          class='triangle-canvas'
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'
        >
          <polygon
            class='triangle triangle-1'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-2'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-3'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-4'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-5'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-6'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-7'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-8'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-9'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-10'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-11'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-12'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-13'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-14'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-15'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-16'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-17'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-18'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-19'
            points='500,200 759,650 241,650'
          />
          <polygon
            class='triangle triangle-20'
            points='500,200 759,650 241,650'
          />
        </svg>
      </div>

      <Profile
        fullName='Aymen Ebdelli'
        bio='Web Developer'
        proffession='UI Design'
        handleName={handleName}
      >
        <img
          src='https://media.istockphoto.com/photos/-picture-id1204740322'
          alt='imgone'
          width='35%'
        />
      </Profile>
    </div>
  );
}

export default App;