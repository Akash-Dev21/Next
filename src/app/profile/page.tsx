"use client"

import axios from 'axios'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ProfilePage () {
  const router = useRouter();

  const [data ,setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success("Logout Successfull")
      router.push('/login')
    } catch (error : any) {
      console.log(error.message);
      toast.error(error.message)
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    // console.log(res.data.data._id);
    setData(res.data.data._id)
  }

  return (
    <div className="flex flex-col item-center justify-center min-h-screen py-2">
      <h1>Profile page</h1>
      <h2 className='padding rounded-lg bg-lime-800'> {data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}></Link> }</h2>
      <hr />
      <hr />
      <button className="padding rounded-lg bg-lime-800" onClick={logout}>Logout</button>
      <hr />
      <hr />
      <button className="padding rounded-lg bg-lime-800" onClick={getUserDetails}>User Detail</button>
    </div> 
    )
}