import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
export const Apple = () => {
    const Navigate = useNavigate();
    const onHomePageButtonClick = () =>{
        Navigate("/");
       //alert("The button is clicked!");  //we can add javascript in this manner
    };
    return(
    <div>
        <div>Apple page🍎</div>
        <Button variant="contained" onClick={onHomePageButtonClick}>
            Hello World</Button>
        {/* <button onClick={onHomePageButtonClick}>Navigate to Home page.</button> */}
     </div> 
)};
 