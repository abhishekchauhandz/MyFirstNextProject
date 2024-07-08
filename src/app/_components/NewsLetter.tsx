'use client'
import { db } from "../firebaseConfig"
import { collection, addDoc} from "firebase/firestore"
import React, {ReactHTMLElement, useState} from "react"

const addNewsletterSubscription = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, "newsletter"), {
      email: email,
      subscribedAt: new Date()
    });
    console.log("Document written with ID: ", docRef.id)
    return true;
  } catch (error){
    console.error("Error adding document ", error)
    return false;
  }
}

export default function NewsLetter () {
  const  [ email, setEmail ] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const added = await addNewsletterSubscription(email);
    if (added) {
      setEmail("");
      alert("Subscription successful!");
    }
  };
  
 return <>
         <section id='newsletter' className='newsletter text-center'>
      <div className='overlay padd-section'>
        <div className='container' data-aos='zoom-in'>

          <div className='row justify-content-center'>
            <div className='col-md-9 col-lg-6'>
              <form className='d-flex' onSubmit={handleSubmit}>
                <input 
                  type='email' 
                  className='form-control ' 
                  placeholder='Email Adress'
                  value={email} 
                  onChange={e => {setEmail(e.target.value)}}
                  name='email'
               />
                <button type='submit' className='btn btn-default'><i className='bi bi-location-arrow'></i>Subscribe</button>
              </form>
            </div>
          </div>

          <ul className='list-unstyled'>
            <li><a href='#'><i className='bi bi-facebook'></i></a></li>
            <li><a href='#'><i className='bi bi-twitter'></i></a></li>
            <li><a href='#'><i className='bi bi-instagram'></i></a></li>
            <li><a href='#'><i className='bi bi-linkedin'></i></a></li>
          </ul>

        </div>
      </div>
    </section>
        </>
}