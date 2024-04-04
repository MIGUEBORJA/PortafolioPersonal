import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0j55zpg', 'template_40r2zll', form.current, {
        publicKey: 'El9IOhjfrCHBOyuxx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className='contact section' id='contact'>
        <h2 className='section__title'>Puedo estar en tus proyectos</h2>
        <span className='section__subtitle'>Contáctame</span>   

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className='contact__title'>Envíame un mensaje</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact_card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">miguelangelborjagallego@gmail.com</span>

                        <a href="mailto:miguelangelborjagallego@gmail.com.com" className="contact__button">Contrátame<i
                        className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact_card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">+57 3206765269</span>

                        <a href="https://api.whatsapp.com/send/?phone=573206765269&text&type=phone_number&app_absent=0" className="contact__button">Contrátame<i
                        className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className='contact__title'>Tenme en cuenta</h3>
                <form ref={form} onSubmit={sendEmail} className='contact__form'>
                <div className="contact__form-div">
                    <label className="contact__form-tag">Nombre</label>
                    <input type="text" name='name' className="contact__form-input" 
                    placeholder='Nombre completo'/>
                </div>

                <div className="contact__form-div">
                    <label className="contact__form-tag">Email</label>
                    <input type="email" name='email' className="contact__form-input" 
                    placeholder='Correo electrónico'/>
                </div>

                <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag">Project</label>
                    <textarea name="project" cols="30" rows="10" className='contact__form-input'
                    placeholder='Proyecto o idea'></textarea>
                </div>

                <button className='button button--flex'>Enviar
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fff"
                    stroke="#fff"
                    version="1.1"
                    viewBox="0 0 31.806 31.806"
                    xmlSpace="preserve"
                    >
                    <g>
                     <path d="M1.286 12.465a2 2 0 00-.462 3.486l6.492 4.724L30.374 2.534 9.985 22.621l8.875 6.458a2.233 2.233 0 003.408-1.038l9.494-25.986a.717.717 0 00-.93-.914L1.286 12.465zM5.774 22.246l.055.301 1.26 6.889a1.558 1.558 0 002.373 1.029c1.755-1.132 4.047-2.634 3.985-2.722l-7.673-5.497z"></path>
                    </g>
                </svg>
                </button>
            </form>
            </div>
        </div>
    </section>
  )
}

export default Contact;