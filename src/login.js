import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Avatar ,Popover } from "@mui/material";
import LogoutIconLinedIcon from '@mui/icons-material/Logout';
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {  toast  } from 'react-toastify' ;
export const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     
     useEffect (()=>{
         if(localStorage.getItem('user-info')){

            Navigate.push('/add');
         }
     });
       async function login(){
        console.warn(email,password)
        let item ={email,password};
        let result = await axios.post("http://localhost:5000/api/user",{
            method : "POST",
            headers : {"Content-Type": "application/json",
                        "Accept ": "application/json"},
            body : JSON.stringify(item)});
            result = await result.json();
            localStorage.setItem("user-info".JSON.stringify(result));
            Navigate("/Home");
            if(result.status === 200 ){
                console.log(result.dayta.id);
                toast.success("registered successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
    
        }
     

     const [open, setOpen] = useState(false);
     const [anchorEl, setAnchorEl] = useState(null);
     const Navigate = useNavigate();
     const validationSchema= Yup.object().shape(
    {
        name : Yup.string().min(3,"Please ,make sure to enter atleast 3 letters").required("Please enter name"),
        email: Yup.string().email("Please enter a valid email").required("Please enter email"),
        password :  Yup.string().min(7,"Please ,make sure to enter atleast 7 letters").required("Please enter password"),
    });
    const initialValues = {
        name : "",
        email : ""

    };
    const onFormSubmit = async (values) =>{
        console.log("on form submission ",values);
        alert("form submitted ");
    };
    
    
    const onHomePageButtonClick = () =>{
        Navigate("./");}
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
     const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };
    return(
   
    <div style={{padding : 5 }}>
                    <div style={{display : 'flex',
                     justifyContent : 'flex-end',
                     cursor : 'pointer',
                     
                    }}
                    >
            <div   onClick={handleClick} 
            style={{display : 'flex',
            justifyContent : 'flex-end',
            alignItems : 'center',
            columnGap : 5}}>
            <Avatar sx={{ bgcolor: "blue "}}>NV</Avatar>
            {/* <span>Noopur Vispute</span> */}

            </div>
        </div>
        
         <div ><center><h1>Login or Create an Account</h1></center>
         <p style ={{padding : 5, color : "#414141" , fontSize: "20px , Roboto " , display : "flex" , columnGap : 20}}>New Customers
         </p>
         <ul style = {{float : "left"}} >
            <li>Faster checkouts</li>
            <li>Save multiple shipping addresses</li>
            <li>View and track orders and more</li></ul> 
         {/* <p style = {{fontSize : "15px, Roboto-Light", color : "#838383",display : "flex" , columnGap : 20, padding : 20}}>Please enter the following information to create your account</p>*/}</div>  
        <div style ={{color : "#414141" , fontSize: "20px , Roboto " , display : "flex"}}>Registered Customers</div>
        <div style={{
            paddingRight : 20,
            display : "flex",
            flexDirection : "column",
            rowGap : 8,
          
        }}>
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}

        >
            {({value,errors,touched,isSubmitting,handleBlur,handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                <div style={{
                    display: "flex",
                    flexDirection : "column",
                    marginBottom : 10}}>
                <TextField 
                   variant="outlined" 
                   name ="email" 
                   label = "Email" 
                   id ="email"
                   type = "email" 
                   placeholder= "email" 
                   onChange={(e)=> setEmail(e.target.value)}
                   onBlur={handleBlur}
                   
                />
                {console.log("email validation: ",errors)}
                {touched.email  && errors.email && <span style={{
                    padding:5,
                    color : "red",
                    fontSize : 16,
                    fontWeight : 500
                }}>{errors.email}</span>}
                </div>
                <div style={{
                    display: "flex",
                    flexDirection : "column",
                    marginBottom : 10}}>
                <TextField 
                   variant="outlined" 
                   name ="password" 
                   label = "Password" 
                   id ="password"
                   type = "password" 
                   placeholder= "password" 
                   onChange={(e)=> setPassword(e.target.value)}
                   onBlur={handleBlur}
                   
                />
                {console.log("password validation: ",errors)}
                {touched.password  && errors.password && <span style={{
                    padding:5,
                    color : "red",
                    fontSize : 16,
                    fontWeight : 500
                }}>{errors.password}</span>}

                </div>
                <Button variant="contained" type ="submit" onClick={login}>
                SUBMIT
                </Button>
                </form>
            )}
            
            </Formik>
         </div>
         {/* <div>
            {user.map((item) => (
                <div key ={item.id}>
                    <h3>{item.title}</h3>
                    <span>{item.body}</span>
                </div>
            ))}
         </div> */}
         <Popover 
        open = {open}
        anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'left',
        }}
        transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
        >
            <h3>Noopur vispute</h3>
            <div style ={{padding : 5}}> 
            <Button variant="contained" onClick={onHomePageButtonClick}>
            Logout <LogoutIconLinedIcon/>
            </Button>
            </div>
         
        </Popover>
     </div> 
);
};