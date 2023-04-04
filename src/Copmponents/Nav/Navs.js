import React from "react";
import {Navbar,Nav,Container} from 'react-bootstrap'
import './Navs.css'
import logo from '../../images/Brain Storming 64.png'

const Navs =({scroll}) =>{


    return ( 
    <Navbar className={`position-fixed ${scroll} `} expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} title="logo" alt="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto   ">
            <Nav.Link className='link' href="#home">Home</Nav.Link>
            <Nav.Link className='link' href="#k">about us</Nav.Link>
            <Nav.Link className='link' href="#j">services</Nav.Link>
            <Nav.Link className='link' href="#link">why choose us</Nav.Link>
            <Nav.Link className='link' href="#" >Apply </Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}
 export default Navs;