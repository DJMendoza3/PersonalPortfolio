import './projects.css';

import Project from './Project';

export default function Projects() {
    return(
        <section id='projects'>
            <h2>Work</h2>
            <Project 
                title='Struggling With The Bums Podcast Site'
                description='A podcast site for the Struggling With The Bums podcast. The site is built with React.JS and uses the Three.JS library for the background animation.'
                image='https://i.imgur.com/4Z7ZQ0M.png'
                stack={['React.JS', 'Three.JS', 'CSS']}
                live='https://strugglingbums.com/'
                orientation='left'
            />
            <Project 
                title='Genemesh'
                description='A web application that allows users to create and share genealogy trees. The application is built with React.JS and uses the Three.JS library for the background animation.'
                image='https://i.imgur.com/4Z7ZQ0M.png'
                stack={['React.JS', 'Three.JS', 'CSS']}
                github='https://strugglingbums.com/'
                orientation='right'
            />
        </section>
    );
}