import { useState } from "react";
import './UserPage.css'

export default function LoginPage(){
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    return(

    <div className="userpage">
        <h1>Login</h1>
        <form className="userform">
            <input type="text" placeholder="username" value={username}/>
            <input type="password" placeholder="password" value={password} />
            <button type="submit">Login</button>
        </form>
    </div>
    )
}