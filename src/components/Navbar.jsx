import {Navbar, Nav, Container} from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Registrar from './Registrar';


const navbar = () => {
    return (
        <>
        <Navbar expand="lg" bg="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">
              <ion-icon name="fast-food"></ion-icon>MenuRest
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                
                <Nav.Link href="./Registrar" >Registrar</Nav.Link>
                <Nav.Link href="./Login">Login</Nav.Link>
             
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
          
      );
    }


export default navbar
