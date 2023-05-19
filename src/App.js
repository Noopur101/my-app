import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Homepage} from "./Homepage";
import { Apple } from "./Apple";
import {Notfound} from "./Notfound";

const App = () => (
  
<BrowserRouter>
  <div style ={{padding : 5 }}>

       <Link to ="/" style ={{marginLeft: 5,}}>Home</Link>
       <Link to ="/apple" style={{ marginLeft : 10,}}>Apple</Link>
       <Link to ="/applet" style={{ marginLeft : 10,}}>Applet</Link>

  </div>
  <Routes>
    <Route path = "/" element ={<Homepage />}></Route>
    <Route path = "/apple" element ={<Apple />}></Route>
    <Route path = "*" element ={<Notfound/>}></Route>
  </Routes>

</BrowserRouter>

);
 

export default App;
