import './skills.css'

export default function Skills() {
    return (
      <section id="skills">
        <h2>Techincal Profile</h2>
        <div id="skills-grid">
          <div className="col">
            <ul>
              <h3>Languages</h3>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h3>Frameworks & Libraries</h3>
              <li>React.JS</li>
              <li>Redux</li>
              <li>React Router</li>
              <li>Jest</li>
              <li>React Testing Library</li>
              <li>MySQL</li>
              <li>Three.JS</li>
              <li>Flask</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h3>Project Management</h3>
              <li>Git</li>
              <li>Agile Development Cycle</li>
              <li>Time Management</li>
              <li>Detailed Oriented</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h3>Other</h3>
              <li>SEO</li>
              <li>Websockets</li>
              <li>Rest API</li>
              <li>CRUD</li>
              <li>Web Accessability</li>
            </ul>
          </div>
        </div>
      </section>
    );
}