import { useEffect } from "react";

export default function DesktopNav() {

    //scroll to component on button click 
    function scrollToComponent(id) {
        const component = document.getElementById(id);
        component.scrollIntoView({behavior: 'smooth'});
    }

    //makes desktop-nav background transparent when scrolled to top of page
    useEffect(() => {
        const desktopNav = document.getElementById('desktop-nav');
        const main = document.getElementById('main');
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
        <header id='desktop-nav'>
            <nav>
                <button onClick={() => scrollToComponent('main')}>DJM</button>
                <button onClick={() => scrollToComponent('skills')}>Skills</button>
                <button onClick={() => scrollToComponent('projects')}>Projects</button>
                <button onClick={() => scrollToComponent('about')}>Work</button>
            </nav>
        </header>
    );
}