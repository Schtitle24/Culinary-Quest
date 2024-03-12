
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="primary" collapseOnSelect expand="sm">
            <Container>
                <Navbar.Brand href="/">Culinary Quest</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/AuthPage">Login</Nav.Link>
                        
                        <NavDropdown title="Drop-down" id="nav-dropdown">
                            <NavDropdown.Item href="/AuthPage">Log In</NavDropdown.Item>
                           
                            <NavDropdown.Item href="/Developers">Developers</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;