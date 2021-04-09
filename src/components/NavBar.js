import { useState } from 'react';
import * as Scroll from 'react-scroll';


const NavBar = () => {
   const [home_button, setHome] = useState(true);
   const [about_button, setAbout] = useState(false);
   const [resume_button, setResume] = useState(false);
   const [contact_button, setContact] = useState(false);

   const highlightCurrent = (button) => {
      setHome(false);
      setAbout(false);
      setResume(false);
      setContact(false);
      if (button === "home") {
         setHome(true);
      } else if (button === "about") {
         setAbout(true);
      } else if (button === "resume") {
         setResume(true);
      } else if (button === "contact") {
         setContact(true);
      }
   }

   return (
      <nav id="nav-wrap">
         <ul id="nav" className="nav">
            <li className={home_button ? "current" : ''}>
               <Scroll.Link to="home" className="smoothscroll" spy={true} smooth={true} offset={10} duration={500} onClick={() => highlightCurrent('home')}>
                  Home
               </Scroll.Link>
            </li>
            <li className={about_button ? "current" : ''}>
               <Scroll.Link to="about" className="smoothscroll" spy={true} smooth={true} offset={10} duration={500} onClick={() => highlightCurrent('about')}>
                 About
               </Scroll.Link>
            </li>
            <li className={resume_button ? "current" : ''}>
               <Scroll.Link to="resume" className="smoothscroll" spy={true} smooth={true} offset={10} duration={500} onClick={() => highlightCurrent('resume')}>
                  Resume
               </Scroll.Link>
            </li>
            <li className={contact_button ? "current" : ''}>
               <Scroll.Link to="contact" className="smoothscroll" spy={true} smooth={true} offset={10} duration={500} onClick={() => highlightCurrent('contact')}>
                  Contact
               </Scroll.Link>
            </li>
         </ul>
      </nav>
   );
}

export default NavBar;