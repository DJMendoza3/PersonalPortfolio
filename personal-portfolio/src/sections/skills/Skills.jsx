import './skills.css'

export default function Skills() {
    return(
        <section id="skills">
            <h2>Techincal Profile</h2>
            <div id='skills-row' className="row">
                <div className="col">
                    <h3>Languages</h3>
                    <p>Javascript</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Python</p>
                </div>
                <div className="col">
                    <h3>Frameworks & Libraries</h3>
                    <p>React.JS</p>
                    <p>Redux</p>
                    <p>React Router</p>
                    <p>Jest</p>
                    <p>React Testing Library</p>
                    <p>MySQL</p>
                    <p>Three.JS</p>
                    <p>Flask</p>
                </div>
                <div className="col">
                    <h3>Project Management</h3>
                    <p>Git</p>
                    <p>Agile Development Cycle</p>
                    <p>Time Management</p>
                    <p>Detailed Oriented</p>
                </div>
                <div className="col">
                    <h3>Other</h3>
                    <p>SEO</p>
                    <p>Websockets</p>
                    <p>Rest API</p>
                    <p>CRUD</p>
                    <p>Web Accessability</p>
                </div>
            </div>
        </section>
    );
}