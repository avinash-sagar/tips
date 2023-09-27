import React from 'react';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import Header from './component/Header';

function App() {
  return (
    <div>
      <Header />
      <Container>
        {/* <Row>
          <Col>
            <h1>Hello, React Bootstrap!</h1>
            <Button variant="primary">Click me</Button>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default App;
