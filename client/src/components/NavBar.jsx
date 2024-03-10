
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
    return (
        <Navbar bg="primary" collapseOnSelect expand="sm">
            <Container>
                <Navbar.Brand href="/">Culinary Quest</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/LoginPage">Login</Nav.Link>
                        <Nav.Link href="/SignUpForm">Sign Up</Nav.Link>
                        <NavDropdown title="Drop-down" id="nav-dropdown">
                            <NavDropdown.Item href="/LoginForm">Log In</NavDropdown.Item>
                            <NavDropdown.Item href="/SignUpForm">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href="/Developers">Developers</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbar;