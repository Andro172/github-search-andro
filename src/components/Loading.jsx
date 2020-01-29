import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div className="text-center">
      <Spinner animation="border" className="orange-font mt-5" />
    </div>
  )
}

export default Loading;