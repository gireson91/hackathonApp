
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Home from './components/Home';
import Library from './components/Library';
import Add from './components/Add';


function App() {
  return (
    <Router>
      <Link to="/">
        <Button variant='primary' type='button'>Home</Button>
      </Link>
      <Link to="/Library">
        <Button variant='primary' type='button'>Library</Button>      
      </Link>
      <Link to="/Add">
        <Button variant='primary' type='button'>Add Show</Button>      
      </Link>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/library" element={<Library />}/>
        <Route path="/add" element={<Add />}/>
      </Routes>
    </Router>
  );
}

export default App;
