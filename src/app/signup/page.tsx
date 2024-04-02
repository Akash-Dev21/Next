"use client"

import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function SignUp () {
    const router = useRouter();
    
    const [user,setUser] = React.useState({
        email : "",
        password : "",
        username : ""
    })

    const [buttonDisabled,setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/signup',user);
            console.log("signup success !",response.data);

            router.push("/login");
        } catch (error : any) {
            console.log("signup Failed : ",error.message);
        } finally {
            setLoading(false)
        }
    }

    useEffect (() => {
        if(user.email.length > 0 && user.password.length > 0 && user.email.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    },[user])
    return (
        <div className="flex flex-col item-center justify-center min-h-screen py-2">
            <h1>Sign UP</h1>
            <hr />
            <label htmlFor="usename">Username</label>
            <input
            className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="username" 
            type="text"
            value={user.username}
            onChange={(e) => {setUser({...user,username : e.target.value})}
            } />
            <label htmlFor="email">Email</label>
            <input
            className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email" 
            type="text"
            value={user.email}
            onChange={(e) => {setUser({...user,email : e.target.value})}
            } />
            <label htmlFor="password">Password</label>
            <input
            className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email" 
            type="text"
            value={user.password}
            onChange={(e) => {setUser({...user,password : e.target.value})}
            } />
            <button className="bg-lime-800" onClick={onSignup}>SignUp</button>
        </div>
        
        
       );
}