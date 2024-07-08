'use client'
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

async function addDataToFireStore(name: string, email: string, subject: string, message: string) {
  try {
    const docRef = await addDoc(collection(db, "contact"), {
      name: name,
      email: email,
      subject: subject,
      message: message,
      timestamp: new Date()
    });
    console.log("Document written with ID: ", docRef.id)
    return true;
  } catch (error) {
    console.error("Error adding document ", error)
    return false;
  }
}

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const added = await addDataToFireStore(name, email, subject, message);
    if (added) {
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");

      alert("Data added to firestore DB!!")
    }
  };
  return (
    <section id='contact' className='padd-section'>
      <div className='container' data-aos='fade-up'>
        <div className='section-title text-center'>
          <h2>Contact</h2>
          <p className='separator'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          </p>
        </div>

        <div className='row justify-content-center' data-aos='fade-up' data-aos-delay='100'>
          <div className='col-lg-3 col-md-4'>
            <div className='info'>
              <div>
                <i className='bi bi-geo-alt'></i>
                <p>
                  A108 Adam Street
                  <br />
                  New York, NY 535022
                </p>
              </div>

              <div className='email'>
                <i className='bi bi-envelope'></i>
                <p>info@example.com</p>
              </div>

              <div>
                <i className='bi bi-phone'></i>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className='social-links'>
              <a href='#' className='twitter'>
                <i className='bi bi-twitter'></i>
              </a>
              <a href='#' className='facebook'>
                <i className='bi bi-facebook'></i>
              </a>
              <a href='#' className='instagram'>
                <i className='bi bi-instagram'></i>
              </a>
              <a href='#' className='linkedin'>
                <i className='bi bi-linkedin'></i>
              </a>
            </div>
          </div>

          <div className='col-lg-5 col-md-8'>
            <div className='form'>
              <form className='php-email-form' onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={e => { setName(e.target.value) }}
                    className='form-control'
                    id='name'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    id='email'
                    value={email}
                    onChange={e => { setEmail(e.target.value) }}
                    placeholder='Your Email'
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    value={subject}
                    onChange={e => { setSubject(e.target.value) }}
                    id='subject'
                    placeholder='Subject'
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <textarea
                    className='form-control'
                    name='message'
                    id='message'
                    value={message}
                    onChange={e => { setMessage(e.target.value) }}
                    rows={5}
                    placeholder='Message'
                    required>
                  </textarea>
                </div>
                <div className='my-3'>
                  <div className='loading'>Loading</div>
                  <div className='error-message'></div>
                  <div className='sent-message'>Your message has been sent. Thank you!</div>
                </div>
                <div className='text-center'>
                  <button type='submit'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
