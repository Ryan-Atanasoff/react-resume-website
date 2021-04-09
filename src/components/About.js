import profilepic from '../images/profpic.jpg';

const About = ({about_data}) => {
    if (about_data) {
        var name = about_data.main.name;
        var bio = about_data.main.bio;
        var city = about_data.main.address.city;
        var state = about_data.main.address.state;
        var zip = about_data.main.address.zip;
        var phone= about_data.main.phone;
        var email = about_data.main.email;
        var resumeDownload = about_data.main.resumedownload;
    }

    return (
        <section id="about">
        <div className="row">
           <div className="three columns">
              <img className="profile-pic"  src={profilepic} alt="Ryan Atanasoff Profile Pic" />
           </div>
           <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{bio}</p>
              <div className="row">
                 <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                             <span>{name}</span><br />
                             <span>{city}, {state} {zip}</span><br />
                             <span>{phone}</span><br />
                       <span>{email}</span>
                         </p>
                 </div>
                 <div className="columns download">
                    <p>
                       <a href={resumeDownload} className="button" download={resumeDownload} filename="atanasoff_resume"><i className="fa fa-download"></i>Download Resume</a>
                    </p>
                 </div>
              </div>
           </div>
        </div>
  
     </section>
    );
}

export default About;