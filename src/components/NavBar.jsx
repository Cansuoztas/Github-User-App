import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setisOpen] = React.useState(sessionStorage.getItem("userName") || false);

  const handleClick = () => {
    setisOpen(false);
    sessionStorage.clear();
  }
  return (
    <div>
      <Navbar  expand="lg" bg="dark" variant="dark">
        {isOpen ? (
          <Container>
            <Navbar.Brand className='text-danger' href="/home">GitHub App</Navbar.Brand>
            <Nav className="">
              <NavLink to="/home">All Followers</NavLink>
              <NavLink to="/about">Followers/Following</NavLink>
              <NavLink to="/" onClick={handleClick}>Log out</NavLink>
            </Nav>
          </Container>) :
          (<Container>
            <Navbar.Brand className='text-danger' href="">GitHub App</Navbar.Brand> </Container>)}
      </Navbar>
    </div>
  )
}

export default NavBar