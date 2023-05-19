import { useNavigate } from "react-router-dom";
export const Apple = () => {
    const Navigate = useNavigate();
    const onHomePageButtonClick = () =>{
        Navigate("/");
    };
    return(
    <div>
        <div>Apple page🍎</div>
        <button onClick={onHomePageButtonClick}>Navigate to Home page.</button>
     </div> 
)};
 