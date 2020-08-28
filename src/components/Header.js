import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar,Form,FormControl } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
const Header = () => {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">    
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Website</Nav.Link>
      <Nav.Link href="#pricing">Login</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

        </div>
    );
};

export default Header;