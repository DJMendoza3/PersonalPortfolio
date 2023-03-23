import './main.css';

import banner_text from 'assets/images/banner-text.png';
import linkedin from 'assets/images/linkedin.gif';
import github from 'assets/images/github.gif';
import resume from 'assets/images/resume.gif';
import resume_pdf from 'assets/misc/resume.pdf';

export default function Main() {
    return(
        <section id="main" className='row'>
                <div id='main-text' className="col">
                    <h1>Daniel Mendoza,</h1>
                    <p>Application developer specialized in creating modern responsive web applications using the React framework.</p>
                </div>
                <div id='main-text-img' className="col">
                    <img src={banner_text} alt="" />
                </div>
                <div id='social-links' className="col">
                    <a href='https://www.linkedin.com/in/daniel-mendoza-88336625b/' target="_blank" rel="noopener noreferrer" className="row">
                        <img src={linkedin} alt="" width='40px' />
                        <span>LinkedIn</span>
                    </a>
                    <a href='https://github.com/DJMendoza3' target="_blank" rel="noopener noreferrer" className="row">
                        <img src={github} alt="" width='40px'/>
                        <span>GitHub</span>
                    </a>
                    <a href={resume_pdf} target="_blank" rel="noopener noreferrer" className="row">
                        <img src={resume} alt="" width='40px'/>
                        <span>Resume</span>
                    </a>
                </div>
        </section>
    );
}