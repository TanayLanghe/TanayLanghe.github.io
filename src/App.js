import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import Signup1 from './signup1';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
          <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/signup1' element={<Signup1/>} />
          </Routes>
      </Router>
  );
}

export default App;
