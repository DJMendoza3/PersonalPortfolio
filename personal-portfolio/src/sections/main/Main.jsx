import './main.css';

import banner_text from 'assets/images/banner-text.png';

export default function Main() {
    return(
        <section id="main" className='row'>
                <div id='main-text' className="col">
                    <h1>Daniel Mendoza,</h1>
                    <p>An application developer specialized in creating modern responsive web applications using the React framework.</p>
                </div>
                <div id='main-text-img' className="col">
                    <img src={banner_text} alt="" />
                </div>
                <div className="col">
                    <p>LinkedIn</p>
                    <p>GitHub</p>
                    <p>Resume</p>
                </div>
        </section>
    );
}