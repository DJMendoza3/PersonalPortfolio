import './contact.css';

import mail from 'assets/images/mail.gif';
import map from 'assets/images/map.gif';

export default function Contact() {
    return(
        <section id="contact">
                 <h2 className="col"><span>Get In</span>
                <span><img></img>Touch</span> </h2>
                <div className="row">
                     <a href="mailto:DJM3webdev@gmail.com"><div className='contact-image'><img src={mail} width='30px' height='30px'/></div>Send Me An Email</a>
                     <div className='contact-image'><img src={map} alt="" width='30px'/></div><p>Location</p>
                </div>
        </section>
    );
}