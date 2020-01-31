import React from 'react';
import Container from 'react-bootstrap/Container';
import { FaGithub } from 'react-icons/fa';

function Idle() {
  return (
    <Container className="route">
      <div className="text-center">
        <FaGithub size="100" />
        <h5 className="mt-3">Find user repositories!</h5>
      </div>
    </Container>
  );
}

export default Idle;
