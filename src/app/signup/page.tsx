"use client"

import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"
import axios from "axios"

export default function SignUp () {
    const [user,setUser] = React.useState({
        email : "",
        password : "",
        username : ""
    })
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
            <button className="bg-lime-800">SignUp</button>
        </div>
        
        
       );
}