import { SocialIcon } from 'react-social-icons';
import * as Scroll from 'react-scroll';

const Footer = ({footer_data}) => {
    if (footer_data) {
        var networks = footer_data.main.social.map((network) => (<SocialIcon key={network.url} url={network.url} className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />));
    }

    return (
        <footer>

        <div className="row">
           <div className="twelve columns">
              <ul className="social-links">
                 {networks}
              </ul>
   
              <ul className="copyright">
                 <li>&copy; Copyright 2021 Ryan Atanasoff</li>
                 <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
              </ul>
   
           </div>
           <div id="go-top" className="smoothscroll">
            <Scroll.Link to="home" spy={true} smooth={true} offset={10} duration={500}>
               <i className="icon-up-open"></i>
            </Scroll.Link>
            </div>
        </div>
     </footer>
      );
}

export default Footer;