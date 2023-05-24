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


export const Apple = () => {
    // const [name , setName] = useState();
    // const [email , setEmail] = useState();
     const [open, setOpen] = useState(false);
     const [anchorEl, setAnchorEl] = useState(null);
     const Navigate = useNavigate();
     const [user, setUser] = useState([]);
    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            console.log("user details : ",res.data);
            setUser(res.data);
        });
    }, []);
    const validationSchema= Yup.object().shape(
    {
        name : Yup.string().min(3,"Please ,make sure to enter atleast 3 letters").required("Please enter name"),
        email: Yup.string().email("Please enter a valid email").required("Please enter email")
    });
    const initialValues = {
        name : "",
        email : "",

    };
    const onFormSubmit = async (values) =>{
        console.log("on form submission ",values);
        alert("form submitted ");
       const requestData ={
        userName :values.name,
        userEmail : values.email,

       } ;
    
       const res = await axios.post("https://jsonplaceholder.typicode.com/posts", requestData);
        if(res.status === 201 ){
            console.log(res.data.id);
            toast.success("api call is completed successfully", {
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
        axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
            if(res.status === 200 ){
                console.log(res.data.id);
                toast.success("data deleted successfully ", {
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
        });
    };
    
    
    const onHomePageButtonClick = () =>{
        Navigate("/");}
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
     const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };
    return(
    <div style={{padding : 5}}>
       
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
            {/* <span>Noopur Vispute</span> */}

            </div>
        </div>
        
        {/* <div>Apple page🍎</div> */}
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
                <Button variant="contained" type ="submit" className="">
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