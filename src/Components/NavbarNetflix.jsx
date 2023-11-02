import { Container, Nav, Navbar } from "react-bootstrap"
import { Bell, PersonCircle, Search } from "react-bootstrap-icons"
import { Link, useLocation } from "react-router-dom"


const NavbarNetflix = ()=>{

  const location = useLocation()
  console.log('OGGETTO LOCATION', location)

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" >
        <Container fluid>
          <Navbar.Brand href="#home">
          <img
              src="assets/logo.png"
              width="100"
              
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
            <Link className= {location.pathname === '/' ? "nav-link active":"nav-link"} to="/">
              Home
            </Link>
              <Nav.Link>TV Shows</Nav.Link>
              <Nav.Link>Movies</Nav.Link>
              <Nav.Link>Recently Added</Nav.Link>
              <Nav.Link>My List</Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="ms-auto d-flex flex-row me-3">
            <Nav.Link ><Search /></Nav.Link>
            <Nav.Link >KIDS</Nav.Link>
            <Nav.Link ><Bell/></Nav.Link>
            <Link className={location.pathname === '/login' ? "nav-link active":"nav-link"} to="/login">
              <PersonCircle/>
            </Link>
              
          </Nav>
        </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarNetflix