import React from 'react';
import PropTypes from 'prop-types';

function Link({children, ...props}) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer" style={{wordWrap: "break-word"}}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.any
};

export default Link;