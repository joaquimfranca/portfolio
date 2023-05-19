import "../Styles/contato.css";

import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";



export default function Contato() {
  return (
    <>
      <div className="main-resume-contato">
    <div className="title-contato"><h1>Contato:</h1></div>
         
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/joaquim-franca/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a href="https://github.com/joaquimfranca" target="_blank">
                <BsGithub />
              </a>
              <a href="https://www.instagram.com/thejojoca/" target="_blank">
                <BsInstagram />
              </a>
              <a href="https://wa.me/5581993851630" target="_blank">
                <BsWhatsapp />
              
              </a>
            </div>
        
              </div>
           
         
       
    
    </>
  );
}
