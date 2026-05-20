import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ThemeSelector from '../themeSelector/ThemeSelector';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext/ThemeContext';

const MyNav = ({ updateSearch }) => {
  const { isDarkMode } = useContext(ThemeContext)

  const computedTheme = isDarkMode ? 'bg-body-tertiary' : 'bg-dark'
  const textColor = isDarkMode ? 'text-dark' : 'text-light'
  return (
    <Navbar expand="md" className={`${computedTheme} mb-4 `}>
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
              <Nav.Link href="#"className={`${textColor}`}>Home</Nav.Link>
              <Nav.Link href="#"className={`${textColor}`}>About</Nav.Link>
              <Nav.Link href="#"className={`${textColor}`}>Browse</Nav.Link>
          </Nav>
          <div className='d-flex justify-content-between'>
            
          <Form.Control
            type="search"
            placeholder="Cerca libro"
            className="me-2"
            aria-label="Search"
            onChange={(e) => updateSearch(e.target.value)}
          />
            
            
          <ThemeSelector />
          </div>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  )
}

export default MyNav
