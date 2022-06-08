import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import {Home} from './components/Home';
import {Login} from './components/Login'
import {Navbar, Nav, Container} from 'react-bootstrap'



function App() {
  return (
    <BrowserRouter>
    <div className="App">

        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                <Nav.Link as={Link} to='/jobs'>Jobs</Nav.Link>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path = '/login' element={<Login/>}/>
          <Route path = '/home' element={<Home/>}>
          </Route>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
