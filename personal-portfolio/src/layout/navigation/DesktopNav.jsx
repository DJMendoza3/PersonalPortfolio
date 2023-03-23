import { useEffect } from "react";

import github_light from "assets/images/github-light.gif";
import linkedin_light from "assets/images/linkedin-light.gif";
import resume_light from "assets/images/resume-light.gif";
import resume_pdf from "assets/misc/resume.pdf";

export default function DesktopNav() {

    //scroll to component on button click 
    function scrollToComponent(id) {
        const component = document.getElementById(id);
        component.scrollIntoView({behavior: 'smooth'});
    }

    //makes desktop-nav background transparent when scrolled to top of page
    useEffect(() => {
        const desktopNav = document.getElementById('desktop-nav');
        const buttons = desktopNav.getElementsByTagName('button');

        function handleScroll() {
            if (window.scrollY > 0) {
                desktopNav.style.backgroundColor = '#2a2a2a';
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].style.color = '#F1F0EA';
                }
            } else {
                desktopNav.style.backgroundColor = 'transparent';
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].style.color = '#2a2a2a';
                }
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return(
        <header id='desktop-nav' className="row">
            <nav>
                <button onClick={() => scrollToComponent('main')}>DJM</button>
                <button onClick={() => scrollToComponent('skills')}>Skills</button>
                <button onClick={() => scrollToComponent('projects')}>Projects</button>
                <button onClick={() => scrollToComponent('about')}>Work</button>
            </nav>
            <div className="row">
                <a href="https://github.com/DJMendoza3" target="_blank" rel="noopener noreferrer"><img src={github_light} alt="" height='40px'/></a>
                <a href="https://www.linkedin.com/in/daniel-mendoza-88336625b/" target="_blank" rel="noopener noreferrer"><img src={linkedin_light} alt="" height='40px'/></a>
                <a href={resume_pdf} target="_blank" rel="noopener noreferrer"><img src={resume_light} alt="" height='40px'/></a>
            </div>
        </header>
    );
}