import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {useState } from 'react';
import TextField from '@mui/material/TextField';
import { Avatar ,Popover} from "@mui/material";
import LogoutIconLinedIcon from '@mui/icons-material/Logout';
export const Apple = () => {
    const [name , setName] = useState("Noopur");
    const [email , setEmail] = useState("noopur@gmail.com");
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const Navigate = useNavigate();
    const onHomePageButtonClick = () =>{
        Navigate("/");
        console.log('button clicked!');
        console.log("Name",name);
        console.log("Email",email);
       //alert("The button is clicked!");  //we can add javascript in this manner
    };
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
            columnGap : '5px'}}>
            <Avatar sx={{ bgcolor: "blue "}}>NV</Avatar>
            {/* <span>Noopur Vispute</span> */}

            </div>
        </div>
        
        {/* <div>Apple page🍎</div> */}
        <div style={{
            padding :5,
            display : "flex",
            flexDirection : "column",
            rowGap : 12
        }}>
            <TextField variant="outlined" label="Name"    type = "text" 
             value ={name} placeholder = "Name" onChange={(e)=> setName(e.target.value)}/>
            <TextField variant="outlined" label = "Email" type = "email" 
             value ={email} placeholder= "email" onChange={(e)=> setEmail(e.target.value)}/>
            <Button variant="contained" onClick={onHomePageButtonClick}>
            SUBMIT
            </Button>
        </div>

        {/* <button onClick={onHomePageButtonClick}>Navigate to Home page.</button> */}
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
)};
 