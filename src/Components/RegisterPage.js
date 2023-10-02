import { useState } from "react";
import './UserPage.css'

export default function RegisterPage(){

    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    return(
        <div className="userpage">
        <h1>Register</h1>
        <form className="userform">
            <input type="text" placeholder="username" value={username}/>
            <input type="password" placeholder="password" value={password} />
            <button type="submit">Sign Up</button>
        </form>
    </div>
    )
}