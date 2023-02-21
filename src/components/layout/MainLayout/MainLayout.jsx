import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import './MainLayout.scss';

const MainLayout = ({children}) => {
  return (
    <Container className='container'>
      {children}
    </Container>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
