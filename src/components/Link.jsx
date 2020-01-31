import React from 'react';
import PropTypes from 'prop-types';

function Link({children, ...props}) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.any
};

export default Link;