import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import appStyle from "./AppStyles.module.css";
//import {globalStyles } from "./constants";
import { Homepage} from "./Homepage";
import { Apple } from "./Apple";
import {Notfound} from "./Notfound";
import { ThemeProvider } from '@emotion/react';
import {theme } from "./styles";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const App = () => (
<>
<ThemeProvider theme={theme}>
  <ToastContainer/>

 {/* <img src = {Logo} alt = "App logo"/> */}
{/* <img src = {"http://localhost:3000/logo192.png"} alt = "App logo"/> */}

<BrowserRouter>
  <div  className = {appStyle.navbarStyle}
  // style =
  // {{...globalStyles.navbar}}
   /* (inline css) style ={{padding : 5, display :"flex" ,columnGap :10 }} */>  
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
</ThemeProvider>
</>
);
export default App;
