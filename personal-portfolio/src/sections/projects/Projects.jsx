import './projects.css';

import Project from './Project';

import struggling_bums_site from 'assets/images/struggling-bums-site.gif';
import genemesh from 'assets/images/genemesh.gif';
import rotating_mesh from 'assets/misc/rotating-mesh.gif';

export default function Projects() {
    return(
        <section id='projects' className='col'>
            <h2>Work</h2>
            <Project 
                title='Struggling With The Bums Podcast Site'
                description='A podcast site for the Struggling With The Bums podcast. The site is built with React.JS and uses the Three.JS library for the background animation.'
                image={struggling_bums_site}
                stack={{frontend: ['React.JS', 'Redux', 'HTML', 'CSS'], backend: ['Flask', 'SQLite', 'JWT Auth'], testing: ['Jest', 'React Testing Library'], deployment: ['Linux', 'Ubuntu', 'Nginx', 'Gunicorn']}}
                live='https://strugglingbums.com/'
                orientation='left'
            />
            <Project 
                title='Genemesh'
                description='A web application that allows users to create and share genealogy trees. The application is built with React.JS and uses the Three.JS library for the background animation.'
                image={genemesh}
                video={rotating_mesh}
                stack={{frontend: ['React.JS', 'Redux', 'Three.JS', 'CSS'], backend: ['Flask', 'MySQL'], testing: ['Jest', 'React Testing Library'] }}
                github='https://strugglingbums.com/'
                orientation='right'
            />
        </section>
    );
}