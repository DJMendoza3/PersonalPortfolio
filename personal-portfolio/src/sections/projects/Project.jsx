export default function Project({
    title,
    description,
    image,
    stack,
    github,
    live,
}) {
    return(
        <div className='project'>
            <div className='project__image'>
                <img src={image} alt={title} />
            </div>
            <div className='project__text'>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{stack}</p>
                <div className='project__links'>

                </div>
            </div>
        </div>
    );
}