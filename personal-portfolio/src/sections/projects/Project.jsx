export default function Project({
    title,
    description,
    image,
    stack,
    github,
    live,
    orientation
}) {
    return(
        <div className='project row' style={{flexDirection: orientation === 'right' && 'row-reverse'}}>
            <img src={image} alt={title} width='500px' height='500px'/>
            <div className='project-text'>
                <h3>{title}</h3>
                <div className='project-links row'>
                    <p>Github</p>
                    <p>Live</p>    
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
                        <h4>deployment</h4>
                        {stack.deployment.map((tech, i) => <p key={i}>{tech}</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
}