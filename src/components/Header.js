import { SocialIcon } from 'react-social-icons';
import * as Scroll from 'react-scroll';

const Header = ({header_data}) => {
   if (header_data) {
      var description = "I'm a software engineer based in Madison, Wisconsin. This is my website. Make yourself at home.";
      var networks = header_data.main.social.map((network) => (<SocialIcon key={network.url} url={network.url} className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />));
   }

   return (
   <header id="home" className='header' name='home'>
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hi. I'm Ryan.</h1>
            <h3><span>{description}</span></h3>
            <br />
            <ul className="social">{networks}</ul>
         </div>
      </div>
      <p className="scrolldown">
         <Scroll.Link to="about" className="smoothscroll" spy={true} smooth={true} offset={10} duration={500}>
            <i className="icon-down-circle"></i>
         </Scroll.Link>
      </p>
   </header>
   );
}

export default Header;