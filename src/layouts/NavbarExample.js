
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import { useSelector } from 'react-redux'


const NavbarExample = () => {
  const user = useSelector(state => state.users);
    return (
        <>
 <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Let's TRAVEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact With Us</Nav.Link>
            <Nav.Link as={Link} to="/apicall">API Call</Nav.Link>
            <Nav.Link as={Link} to="/pagination">Pagination</Nav.Link>
            <Nav.Link as={Link} to="/apicall-2">API CALL-2</Nav.Link>
            <Nav.Link as={Link} to={"/editprofile"} > Edit Profile</Nav.Link>
            {/* state={{ id: user.id }} */}
            <NavDropdown title="List of Places" id="basic-nav-dropdown">
              <NavDropdown.Item href="/india">India</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/thailand">
                Thailand
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malysia">Malysia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/bangkok">
              Bangkok
              </NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
        <Outlet></Outlet>
    </section>
        </>
    )
}

export default NavbarExample