import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contacts.css"


const Contacts = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2mwb6bp', 'template_synhikn', form.current, 'OcgEjNylL8_YIJt91')
      e.target.reset()
  };
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">If Any Queries</h2>
        <span className="section__subtitle">Contact Us</span>
        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to us</h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">user@gmail.com</span>
                        <a href="mailto:examplemail@gmail.com.com" className="contact__button">Write us <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">911-911-911</span>
                        <a href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information" className="contact__button">Write us <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-instagram contact__card-icon"></i>
                        <h3 className="contact__card-title">Instagram</h3>
                        <span className="contact__card-data">user.fb123</span>
                        <a href="https://www.instagram.com/" className="contact__button">Write us <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Write your queries</h3>
                <h3 className="contact__title">Write your queries</h3>
                <form ref={form} onSubmit={sendEmail} action="" className="contact__form">
                    <div className="contact__form-div">
                        <label htmlFor="" className="contact__form-tag">Name</label>
                        <input type="text" name='name' placeholder='Insert your name' className="contact__form-input" />
                    </div>
                    <div className="contact__form-div">
                        <label htmlFor="" className="contact__form-tag">Mail</label>
                        <input type="text" name='email' placeholder='Insert your email' className="contact__form-input" />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label htmlFor="" className="contact__form-tag">Queries</label>
                        <textarea name="query" cols="30" rows="10" className="contact__form-input" placeholder='Write your query'></textarea>
                    </div>
                    <button  className="button button--flex">
                        Send Message
                        <i class='bx bxs-send button__icon' ></i>
                    </button>
                    
                </form>

            </div>
        </div>
    </section>

  )
}

export default Contacts;