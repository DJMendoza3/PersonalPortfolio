import { useContext, useEffect } from "react";
import { WindowContext } from "providers/WindowProvider";
import mouseEffect from "utils/mouseEffect";

import Navigation from "layout/navigation/Navigation";
import Main from "sections/main/Main";
import Skills from "sections/skills/Skills";
import Projects from "sections/projects/Projects";
import About from "sections/about/About";
import Contact from "sections/contact/Contact";
import Footer from "layout/footer/Footer";

export default function Container() {
  const { dimensions, setDimensions } = useContext(WindowContext);
    let trail = document.getElementsByClassName('trail');

  if (dimensions.width > 768) {
      mouseEffect();
  }


    useEffect(() => {
        
        if(trail.length > 0) {
            for(let i = 0; i < trail.length; i++) {
                trail[i].style.width = `${20-i}px`;
                trail[i].style.height = `${20-i}px`;
            }
        }
    }, [trail]);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setDimensions]);

  return (
    <>
      <Navigation />
      <Main />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
