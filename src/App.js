import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/login' element={<Login/>}/>
          <Route path = '/home' element={Home}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
