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
                <p>{description}</p>
                <p>frontent</p>
                {stack.frontend.map((tech, i) => <p key={i}>{tech}</p>)}
                <p>backend</p>
                {stack.backend.map((tech, i) => <p key={i}>{tech}</p>)}
                <p>testing</p>
                {stack.testing.map((tech, i) => <p key={i}>{tech}</p>)}
                <p>deployment</p>
                {stack.deployment.map((tech, i) => <p key={i}>{tech}</p>)}
                <div className='project-links'>

                </div>
            </div>
        </div>
    );
}