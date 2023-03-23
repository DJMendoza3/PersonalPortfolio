import { useContext, useEffect } from "react";
import { WindowContext } from "providers/WindowProvider";

import Navigation from "layout/navigation/Navigation";
import Main from "sections/main/Main";
import Skills from "sections/skills/Skills";
import Projects from "sections/projects/Projects";
import About from "sections/about/About";
import Contact from "sections/contact/Contact";
import Footer from "layout/footer/Footer";

export default function Container() {
  const { setDimensions } = useContext(WindowContext);



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
