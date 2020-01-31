import React from 'react';
import Container from 'react-bootstrap/Container';
import { FaGithub } from 'react-icons/fa';

function Idle() {
  return (
    <Container className="route">
      <div className="text-center">
        <FaGithub size="100" />
        <p className="mt-3">Find user repositories!</p>
      </div>
    </Container>
  );
}

export default Idle;
