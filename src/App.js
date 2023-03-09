import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import Signup1 from './signup1';
import Signup2 from './signup2';
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
        <Route path='/indexpage' element={<IndexPage />} />
      </Routes>);
  }
}
export default App;
