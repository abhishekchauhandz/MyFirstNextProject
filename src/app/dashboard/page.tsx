"use client"



import { useAuth } from "../context/AuthContext";

export default function AdminDashboard(){
    const { user, userName, logout } = useAuth()

    return(
        <>
        ADMIN DASHBOARD
        <h2>{userName}</h2>
        <button onClick={logout}>Logout</button>
        </>
    )
}