// auth/login.tsx
'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebaseConfig';
import Link from 'next/link';

const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      console.error("Error logging in..", error);
      alert('Login failed');
      setLoading(false);
    }
  };

  return (
    <>
      <Link href="/">
        <p style={{ backgroundColor: "#ff7c04", color: "#fff", textDecoration: "none", fontSize: "1rem", padding: "8px" }}>Back to home</p>
      </Link>
      <div className="container-fluid bg-light vh-100 d-flex align-items-center justify-content-center">
        <div className="card p-4 shadow" style={{ width: "400px" }}>
          <h2 className="text-center mb-4">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="inputEmail">Email address</label>
              <input type="email" className="form-control mt-2" id="inputEmail" placeholder="Enter email" value={email} onChange={e => { setEmail(e.target.value) }} />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control mt-2" id="inputPassword" placeholder="Password" value={password} onChange={e => { setPassword(e.target.value) }} />
            </div>
            <div className="form-group d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-block">{loading ? "Logging in..." : "Login"}</button>
            </div>
          </form>
          <hr/>
          <div className="text-center mt-3">
            <Link href="/forgot-password">
              <p className="mr-3">Forgot Password?</p>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
