// import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Login } from './components/Login/Login';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookStore } from './components/BookStore';
import { useEffect, useState } from 'react';
import { MainNavigation } from './components/MainNavigation';
import { Footer } from './components/footers/Footer';
import { Headers } from './components/headers/Headers';
const App = () => {
  // const [isLogin,setIsLogin] = useState(localStorage.getItem("isLogin"));
  const isLogin = localStorage.getItem("isLogin");
  useEffect(() => {
    // console.log(isLogin);
    localStorage.setItem("isLogin",false);
    console.log(localStorage.getItem("isLogin"));
  });
  return (
    <div>
      <BrowserRouter>
        <Headers/>
        <ToastContainer />
        <MainNavigation />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;