import React from 'react';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <h1>Hello, React Bootstrap!</h1>
            <Button variant="primary">Click me</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
