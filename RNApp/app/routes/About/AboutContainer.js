import React from 'react';
import About from './About';
import Routes from '../../config/routes';

const AboutContainer = (props) => {
  return (
    <About/>
  );
};

AboutContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default AboutContainer;
