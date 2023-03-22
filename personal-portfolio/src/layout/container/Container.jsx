import Navigation from "layout/navigation/Navigation";
import Main from "sections/main/Main";
import Skills from "sections/skills/Skills";
import Projects from "sections/projects/Projects";
import About from "sections/about/About";
import Contact from "sections/contact/Contact";

export default function Container() {
    return(
        <>
            <Navigation />
            <Main />
            <Skills />
            <Projects />
            <About />
            <Contact />
        </>
    );
}