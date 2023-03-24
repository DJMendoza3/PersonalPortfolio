import { useState, useEffect } from "react";

import github_img from "assets/images/github.gif";
import external_link from "assets/images/external-link.gif";

export default function Project({
    id,
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
            <img id={`${title}-img`} className='project-img' src={display} alt={title} width='500px'/>
            <div className='project-text col'>
                <div className="project-text-header">
                    <p>{id}</p>
                    <h3>{title}</h3>
                    <div className='project-links row'>
                        {github && <a href={github} target="_blank" rel="noopener noreferrer" className="row">Code <img src={github_img} alt="" width='25px'/></a> }
                        {live && <a href={live} target="_blank" rel="noopener noreferrer" className="row">Live Site <img src={external_link} alt="" width='20px'/></a>   }
                    </div>
                    <div className="project-line" />
                    <p className="project-description">{description}</p>
                </div>
               
                <div className="project-stack row">
                    <div>
                        <h4>Frontent</h4>
                        {stack.frontend.map((tech, i) => <p key={i}>{tech}</p>)}
                    </div>
                    <div>
                        <h4>Backend</h4>
                        {stack.backend.map((tech, i) => <p key={i}>{tech}</p>)}
                    </div>
                    <div>
                        <h4>Testing</h4>
                        {stack.testing.map((tech, i) => <p key={i}>{tech}</p>)}
                    </div>
                    <div>
                        {stack.deployment && <>
                        <h4>Deployment</h4>
                        {stack.deployment.map((tech, i) => <p key={i}>{tech}</p>)}</>}
                    </div>
                </div>
            </div>
        </div>
    );
}