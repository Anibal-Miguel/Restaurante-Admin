import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
        <Navbar/>
        <Home/>
        <Login/>
    </Router> 


  )
}

export default App


