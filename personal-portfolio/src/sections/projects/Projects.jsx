import './projects.css';

import Project from './Project';

import struggling_bums_site from 'assets/images/struggling-bums-site.gif';
import genemesh from 'assets/images/genemesh.gif';
import rotating_mesh from 'assets/misc/rotating-mesh.gif';

export default function Projects() {
    return(
        <section id='projects' className='col'>
            <h2>Portfolio</h2>
            <Project 
                id='01'
                title='Struggling With The Bums Podcast Site'
                description='The official website for the Struggling With The Bums podcast. The site is built with React.JS and uses the Redux library for state management. The site is hosted on a Linux server and uses Nginx as a reverse proxy and Gunicorn as a WSGI server.'
                image={struggling_bums_site}
                stack={{frontend: ['React.JS', 'Redux', 'HTML', 'CSS'], backend: ['Flask', 'SQLite', 'JWT Auth'], testing: ['Jest', 'React Testing Library'], deployment: ['Linux', 'Ubuntu', 'Nginx', 'Gunicorn']}}
                live='https://strugglingbums.com/'
                orientation='left'
            />
            <Project 
                id='02'
                title='Genemesh: A Text To 3D Mesh Application'
                description='Genemesh is an application designed to allow for simpler interaction between users and OpenAIs POINT-E model. The application is built with React.JS and uses the Three.JS library for mesh display and interaction.'
                image={genemesh}
                video={rotating_mesh}
                stack={{frontend: ['React.JS', 'Redux', 'Three.JS', 'CSS'], backend: ['Flask', 'MySQL'], testing: ['Jest', 'React Testing Library'] }}
                github='https://github.com/DJMendoza3/GeneMesh'
                orientation='right'
            />
        </section>
    );
}