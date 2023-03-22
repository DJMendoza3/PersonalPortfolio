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
                <p>{stack}</p>
                <div className='project-links'>

                </div>
            </div>
        </div>
    );
}