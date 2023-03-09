import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import Signup1 from './signup1';
import Signup2 from './signup2';
import Signup3 from './signup3';
import Signup4 from './signup4';
import Signup5 from './signup5';
import Signup6 from './signup6';
import Signup7 from './signup7';
import IndexPage from './indexPage';
import {
  Routes,
  Route
} from "react-router-dom";
import {Component} from 'react';

class App extends Component {
  render(){
    return(
      <Routes>
        <Route exact path='/' element={<Welcome />} /> 
        <Route path='/signup1' element={<Signup1 />} />
        <Route path='/signup2' element={<Signup2 />} />
        <Route path='/signup3' element={<Signup3 />} />
        <Route path='/signup4' element={<Signup4 />} />
        <Route path='/signup5' element={<Signup5 />} />
        <Route path='/signup6' element={<Signup6 />} />
        <Route path='/signup7' element={<Signup7 />} />
        <Route path='/indexpage' element={<IndexPage />} />
      </Routes>);
  }
}
export default App;
