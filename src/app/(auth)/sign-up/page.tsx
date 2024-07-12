// app/auth/sign-up/page.tsx
'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '@/app/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email,
      });
      await signOut(auth);
      alert('Registration successful');
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      router.push('/login');
    } catch (error) {
      console.error('Error registering:', error);
      alert('Registration failed');
      setLoading(false);
    }
  };

  return (
    <>
      <Link href="/">
        <p style={{ backgroundColor: "#71c55d", color: "#fff", textDecoration: "none", fontSize: "1rem", padding: "8px" }}>Back to home</p>
      </Link>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between mb-3">
              <div className="form-group">
                <label htmlFor="inputFirstName">First Name</label>
                <input type="text" className="form-control mt-2" id="inputFirstName" placeholder="Enter first name" value={firstName} onChange={e => { setFirstName(e.target.value) }} />
              </div>
              <div className="form-group">
                <label htmlFor="inputLastName">Last Name</label>
                <input type="text" className="form-control mt-2" id="inputLastName" placeholder="Enter last name" value={lastName} onChange={e => { setLastName(e.target.value) }} />
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="inputEmail">Email address</label>
              <input type="email" className="form-control mt-2" id="inputEmail" placeholder="Enter email" value={email} onChange={e => { setEmail(e.target.value) }} />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="inputPassword">Create Password</label>
              <input type="password" className="form-control mt-2" id="inputPassword" placeholder="Create password" value={password} onChange={e => { setPassword(e.target.value) }} />
            </div>
            <div className="form-group d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-block">{loading ? "Signing up.." : "Sign Up"}</button>
            </div>
          </form>
          <div className="text-center mt-3">
            <span>Already have an account? </span>
            <Link href="/login">
              <p className="ml-1">Login here</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
