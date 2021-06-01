import {  Nav, Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import { BrowserRouter as Switch, Route, NavLink } from "react-router-dom";


const Navigation: React.FC = () => (
    <Navbar expand="lg" className="nav">
        <Container>
            {/* Logo/Brand */}
            <Navbar.Brand href="/">
                <h1 className="nav__logo">
                    The YAY Company
                </h1>
            </Navbar.Brand>


            {/* Hamburger Icon */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />


            {/* Menu */}
            <Navbar.Collapse id="basic-navbar-nav">

                {/* List */}
                <Nav className="mr-auto">
                    <NavLink exact to="/" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/news" className="nav-link">
                        News
                    </NavLink>
                    <NavLink to="/contact" className="nav-link">
                        Contact
                    </NavLink>
                </Nav> 

                {/* Search */}
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 form__input form__input--grey" />
                    <Button variant="primary">Go</Button>
                </Form>

            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;