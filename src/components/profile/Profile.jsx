import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import { Card, Button, Image, Row } from 'react-bootstrap';

function Profile({ fullName, bio, proffession, children, handleName }) {
  return (
    <div className='profile'>
      <Card className='bg-info prenoun' body>
        {fullName}
      </Card>

      <Row>
        <h1>{bio}</h1>
      </Row>
      <Row>
        <h1>{proffession}</h1>
      </Row>
      <Row className='image-pos' style={{ width: '35%' }}>
        {children}
      </Row>

      <br />
      <br />
      <Button variant='warning' size='lg' onClick={handleName}>
        Click Me
      </Button>
    </div>
  );
}
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  children: PropTypes.any,
  handleName: PropTypes.object,
};
Profile.defaultProps = {
  fullName: 'Aymen Ebdelli',
  bio: 'Doctor',
  proffession: 'front-end developer',
  children: (
    <Image
      src='https://media.istockphoto.com/photos/-picture-id1204740322'
      alt='imgone'
      rounded
    />
  ),
  handleName: {
    handleName(e) {
      e.preventDefault();
      alert('Jack Bauer');
    },
  },
};

export default Profile;
