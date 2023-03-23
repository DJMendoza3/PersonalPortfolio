import { useState, useEffect } from "react";

export default function Project({
    title,
    description,
    image,
    video,
    stack,
    github,
    live,
    orientation
}) {
    const [display, setDisplay] = useState(image);

    useEffect(() => {
      if (video) {
        const img = document.getElementById(`${title}-img`);

        img.addEventListener("mouseover", () => {
          setDisplay(video);
        });

        img.addEventListener("mouseout", () => {
          setDisplay(image);
        });

        return () => {
          img.removeEventListener("mouseover", () => {
            setDisplay(video);
          });

          img.removeEventListener("mouseout", () => {
            setDisplay(image);
          });
        };
      }
    }, []);

    return(
        <div className='project row' style={{flexDirection: orientation === 'right' && 'row-reverse'}}>
            <img id={`${title}-img`} src={display} alt={title} width='500px' height='500px'/>
            <div className='project-text col'>
                <div>
                    <p>01</p>
                    <h3>{title}</h3>
                    <div className='project-links row'>
                        <p>Github</p>
                        <p>Live</p>    
                    </div>
                    <div className="project-line" />
                </div>
                <p>{description}</p>
                <div className="project-stack row">
                    <div>
                        <h4>frontent</h4>
                        {stack.frontend.map((tech, i) => <p key={i}>{tech}</p>)}
                    </div>
                    <div>
                        <h4>backend</h4>
                        {stack.backend.map((tech, i) => <p key={i}>{tech}</p>)}
                    </div>
                    <div>
                        <h4>testing</h4>
                        {stack.testing.map((tech, i) => <p key={i}>{tech}</p>)}
                    </div>
                    <div>
                        {stack.deployment && <>
                        <h4>deployment</h4>
                        {stack.deployment.map((tech, i) => <p key={i}>{tech}</p>)}</>}
                    </div>
                </div>
            </div>
        </div>
    );
}