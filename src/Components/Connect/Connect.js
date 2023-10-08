import React from 'react';
import './Connect.css';
import emailjs from '@emailjs/browser'

export const Connect = () => {
  const sendEmail = (event) => {
    event.preventDefault()
    alert("Submitted")
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID , event.target, process.env.REACT_APP_PUBLIC_KEY)
  }
  return (
    <div className="Connect">
      <h2 className="Titles"> Contact </h2>
      <form className="ContactForm" onSubmit={sendEmail}>
        <label htmlFor="emailFrom"> Your Email: </label>
        <input type="text" name="email_from" id="emailForm" className="email_from" required/>
        <label htmlFor="message"> Message: </label>
        <textarea name="message" id="message" className="message__box" required> </textarea>
        <button className="SendButton" type="submit" variant="contained">
          Send
        </button>
      </form>
    </div>
  );
}
