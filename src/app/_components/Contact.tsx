'use client'

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus("Submitted");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setFormStatus("Error");
      }
    } catch (error) {
      setFormStatus("Error");
    }
  };

  return (
    <section id='contact' className='padd-section'>
      <div className='container' data-aos='fade-up'>
        <div className='section-title text-center'>
          <h2>Contact</h2>
          <p className='separator'>
          Complete the form below and someone from sales
          will contact you to discuss further details.
          </p>
        </div>

        <div className='row justify-content-center' data-aos='fade-up' data-aos-delay='100'>
          <div className='col-lg-3 col-md-4'>
            <div className='info'>
              <div>
                <i className='bi bi-geo-alt'></i>
                <p>
                  1 Meca Way
                  <br />
                  Building F, Norccross GA 30093
                </p>
              </div>

              <div className='email'>
                <i className='bi bi-envelope'></i>
                <p>info@example.com</p>
              </div>

              <div>
                <i className='bi bi-phone'></i>
                <p>(678)684-4355</p>
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Your Email'
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder='Message'
                    required>
                  </textarea>
                </div>
                <div className='my-3'>
                  
                </div>
                <div className='text-center'>
                  <button type='submit'>
                    {formStatus === "Submitting" ? "Sending Message..." : "Send Message"}
                    {formStatus === "Submitting" && <div className='loading'>Loading</div>}
                  {formStatus === "Error" && <div className='error-message'>Error submitting form.</div>}
                  {formStatus === "Submitted" && <div className='sent-message'>Your message has been sent. Thank you!</div>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
