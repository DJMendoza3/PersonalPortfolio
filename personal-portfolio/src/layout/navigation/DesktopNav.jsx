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
        const mainHeight = main.offsetHeight;

        function handleScroll() {
            if (window.scrollY > mainHeight) {
                desktopNav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            } else {
                desktopNav.style.backgroundColor = 'transparent';
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