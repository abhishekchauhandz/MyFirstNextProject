// src/app/(auth)/forgot-password/page.tsx
import React from 'react';
import Link from 'next/link';

const ForgotPassword: React.FC = () => {
    return (
        <>
        <Link href="/">
         <p style={{backgroundColor: "#71c55d", color: "#fff", textDecoration: "none", fontSize: "1rem", padding: "8px"}}>Back to home</p>
        </Link>
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Forgot Password</h2>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="inputEmail">Email address</label>
                        <input type="email" className="form-control mt-2" id="inputEmail" placeholder="Enter email" />
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div>
                </form>
                <div className="text-center mt-3">
                    <Link href="/login">
                        <p>Back to Login</p>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default ForgotPassword;
