import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Error() {
  return (
    <Alert variant="danger" className="mt-3 mt-md-5">
      An error has occurred!
    </Alert>
  )
}

export default Error;