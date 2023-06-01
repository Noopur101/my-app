import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { Avatar ,Popover } from "@mui/material";
import LogoutIconLinedIcon from '@mui/icons-material/Logout';
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {  toast  } from 'react-toastify' ;
export const Apple = () => {
    //  const name  = useRef();
    //  const email = useRef();
    //  const password = useRef();
    // const[name ,setName ] = useState('');
    // const[email, setEmail] = useState('');
    // const[password, setPassword ] = useState('');
    // const[confirmpassword, setCpassword ] = useState('');


     const [open, setOpen] = useState(false);
     const [anchorEl, setAnchorEl] = useState(null);
     const Navigate = useNavigate();
     const [user, setUser] = useState([]);
    useEffect(()=> {
            axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            console.log("user details : ",res.data);
            setUser(res.data);
                });
    },[]);
    const validationSchema= Yup.object().shape(
    {
        name : Yup.string().trim("the content name cannot includeleading spaces")
        .min(1,"Please ,make sure to enter atleast 1 letters")
        .required("Please enter name"),
        email: Yup.string().email("Please enter a valid email")
        .required("Please enter email"),
        password :  Yup.string().min(7,"Please ,make sure to enter atleast 7 letters")
        .required("Please enter password"),
        confirmpassword : Yup.string().oneOf([Yup.ref('password'),null],'Password must match ')
        .required("Please enter password")
    });
    const initialValues = {
        name : "",
        email : "",
        password : "",
   };
    const onFormSubmit = async (values) =>{
        console.log("on form submission ",values);
        alert("form submitted ");
        const requestData ={
        userName :values.name,
        userEmail : values.email,
        userPassword : values.password,
        userConfirmPassword : values.confirmpassword,

       } ;
    
       const res = await axios.post("https://jsonplaceholder.typicode.com/posts", requestData);
        if(res.status === 201){
            console.log(res.data.id);
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
    };
    
    const onHomePageButtonClick = () =>{
        Navigate("/");}
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
        // localStorage.setItem('name',name);
        // localStorage.setItem('email',email);
        // localStorage.setItem('password',password);

     }
    //  const handle =(event)=>{
    //     localStorage.setItem('name',name);
    //     localStorage.setItem('email',email);
    //     localStorage.setItem('password',password);
    //     setAnchorEl(event.currentTarget);
    //     setOpen(true);
    //  }
        
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };
    
    return(
    <div style={{padding : 5 }}>
       
        <div style={{display : 'flex',
                     justifyContent : 'flex-end',
                     cursor : 'pointer'
                    }}
        >
           
            <div   onClick={handleClick} 
            style={{display : 'flex',
            justifyContent : 'flex-end',
            alignItems : 'center',
            columnGap : 5}}>
            <Avatar sx={{ bgcolor: "blue "}}>NV</Avatar>
            </div>
        </div>
        
         <div ><center><h1>Login or Create an Account</h1></center>
         <p style ={{padding : 20, color : "#414141" , fontSize: "20px , Roboto " , display : "flex" , columnGap : 20}}>Personal Information</p>
         {/* <p style = {{fontSize : "15px, Roboto-Light", color : "#838383",display : "flex" , columnGap : 20, padding : 20}}>Please enter the following information to create your account</p>*/}</div>  
        <div style={{
            padding :5,
            display : "flex",
            flexDirection : "column",
            rowGap : 8
        }}>
             
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}

        >
            {({value,errors,touched,isSubmitting,handleChange,handleBlur,handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                    
                <div style={{
                    display: "flex",
                    flexDirection : "column",
                    marginBottom: 5
                }}>
                <TextField 
                   variant="outlined" 
                   name="name"
                   label="Name"   
                   id ="name"
                   type = "text" 
                   placeholder = "Name" 
                   onChange={handleChange}
                   onBlur={handleBlur}
                /></div>
                {touched.name && errors.name && <span style={{
                    padding:5,
                    color : "red",
                    fontSize : 16,
                    fontWeight : 500
                }}>{errors.name}</span>}
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
                   onChange={handleChange}
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
                   onChange={handleChange}
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
                <div style={{
                    display: "flex",
                    flexDirection : "column",
                    marginBottom : 10}}>
                <TextField 
                   variant="outlined" 
                   name ="confirmpassword" 
                   label = "Confirm Password" 
                   id ="conmfirmpassword"
                   type = "password" 
                   placeholder= "password" 
                   onChange={handleChange}
                   onBlur={handleBlur}
                   
                />
                {console.log("password validation: ",errors)}
                {touched.confirmpassword  && errors.confirmpassword && <span style={{
                    padding:5,
                    color : "red",
                    fontSize : 16,
                    fontWeight : 500
                }}>{errors.confirmpassword}</span>}

                </div>
                
                <Button variant="contained" type ="submit"   >
                SUBMIT
                </Button>
                </form>
            )}
            
            
            </Formik>
         </div>

         <div>
            {user.map((item) => (
                <div key ={item.id}>
                    <h3>{item.title}</h3>
                    <span>{item.body}</span>
                </div>
            ))}
         </div>

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