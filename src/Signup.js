import React ,{useRef} from "react";
//import { Homepage } from "./Homepage";
export const Signup=() =>{
    const name = useRef();
    const email = useRef();
    const password = useRef();
    // const 
    // useEffect(()=>{
    //     if()
    // })

    const handleClick=()=> {
        if(name.current.value && email.current.value && password.current.value){
            localStorage.setItem("name",name.current.value)
            localStorage.setItem("email",email.current.value)
            localStorage.setItem("password",password.current.value)
            localStorage.setItem("signUp",name.current.value)
            alert('stored successfully')
        }
    }
    return (
        <div>
            <div className = "container">
                <input type = "text" placeholder ="Name" ref={name}/>
            </div>
            <div className = "container">
                <input type = "email" placeholder ="Email" ref={email}/>
            </div>
            <div className = "container">
                <input type = "password" placeholder ="Password" ref={password}/>
            </div>
            <button onClick={handleClick}>SignUp</button>
        </div>

    )

}