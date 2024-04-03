"use client"

import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "react-hot-toast"

export default function Login () {
    const router = useRouter();

    const [user,setUser] = React.useState({
        password : "",
        email : ""
    })

    const [buttonDisabled,setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/login',user);
            console.log("login success !",response.data);
            toast.success("Login Success")
            router.push("/profile");
        } catch (error : any) {
            console.log("login Failed : ",error.message);
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
            <h1>Login</h1>
            <hr />
            <label htmlFor="usename">email</label>
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
            id="password" 
            type="password"
            value={user.password}
            onChange={(e) => {setUser({...user,password : e.target.value})}
            } />
            <button className="bg-lime-800" onClick={onLogin}>Login</button>
        </div>
        
        
       );
}