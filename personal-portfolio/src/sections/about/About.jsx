import './about.css';

export default function About() {
    const about = `     As a frontend developer, I am dedicated to delivering high-quality, responsive, and engaging user interfaces that meet the needs of the end-users. I specialize in building pixel-perfect designs using HTML, CSS, and JavaScript that are fully responsive and accessible across all devices. Additionally, I have experience with modern front-end tools and frameworks  like React and Redux, allowing me to build scalable and modular applications that are easy to maintain and extend.
                    
    In addition to frontend development, I possess knowledge of backend technologies, particularly Python with Flask, which plays a crucial role in creating seamless communication between the frontend and the backend. I believe having a broad knowledge set is essential when developing as part of a larger team, facilitating better understanding and communication between developers across the stack.

    I am motivated to continuously improve my skills and learn new technologies that can enhance my development process. I am always looking for new challenges and opportunities to expand my knowledge and expertise.

    When I'm not coding, I enjoy the great outdoors and can often be found exploring new trails or camping in the woods. Off-roading is a passion of mine, and I love tackling challenging terrain in my Jeep Wrangler. Being out in nature helps me to disconnect from technology and clear my mind, which in turn allows me to return to my work with renewed focus and creativity. Maintaining a healthy work-life balance is important to me, and spending time outdoors is an essential part of that balance.`;
    return(
        <section id="about">
            <h2>Some More About Myself</h2>
            <pre>
                {about}
            </pre>
        </section>
    );
}