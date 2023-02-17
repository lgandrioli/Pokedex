import React from 'react'
import {BsLinkedin,BsGithub} from "react-icons/bs"
import { Link } from 'react-router-dom'
import "./styles.css"
import { MdEmail } from "react-icons/md";
import "./styles.css"

function EmailCopyButton(props) {
  const { email } = props;

  const handleCopy = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(email);
    alert(`My email for contact: ${email}`);
  };
  return (
    <button type='button' onClick={handleCopy} className="email_button"><MdEmail size={55}/></button>
  );
 
}





function Footer() {
  const myEmail = "lgandrioli@hotmail.com"
  return (
    <div className='footer'>
        <div>
          Created by @lgandrioli
        </div>
        <div className='footer_links'><Link to="https://www.linkedin.com/in/gustavo-andrioli-3b439a1a0/" target='_blank' className='link_icon'><BsLinkedin size={50}/></Link>
        <EmailCopyButton email={myEmail} />
        <Link to="https://github.com/lgandrioli?tab=overview&from=2023-02-01&to=2023-02-16" target='_blank' className='link_icon'><BsGithub size={50}/></Link></div>
    </div>
  )
}

export default Footer