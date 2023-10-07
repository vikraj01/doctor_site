import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useNavigate } from 'react-router-dom'

const LogoutNavItem = () => {
  const navigate = useNavigate()

  const handleLogout = e => {
    e.preventDefault() // Prevent the default behavior (navigation)
    localStorage.clear() // Clear local storage or perform any logout action
    navigate('/')
  }

  return <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
}

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const role = user ? user.role : ''

  return (
    <Navbar expand='lg' className='bg-body-tertiary mb-5 p-4'>
      <Container>
        <Navbar.Brand href={role ? '/' + role + '/' : '/'}>
          Doctor Appointments
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavDropdown title='Profile' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/patient/profile/'>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href='/patient/appointments/'>
                Appointments
              </NavDropdown.Item>
              <NavDropdown.Item href='/patient/appointments-history'>
                Previous Appointments
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <LogoutNavItem />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
