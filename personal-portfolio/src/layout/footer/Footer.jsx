import linkedin from 'assets/images/linkedin-light.gif';
import github from 'assets/images/github-light.gif';
import './footer.css';

export default function Footer() {
    return(
        <footer id='footer'>
            <div className="row">
                <p>© 2021 Daniel M. All Rights Reserved.</p>
                <div>
                    <a href="https://www.linkedin.com/in/daniel-m-0b0b1b1b9/" target="_blank" rel="noreferrer"><img src={linkedin} alt="" /></a>
                    <a href=""><img src={github} alt="" /></a>
                </div>
            </div>
        </footer>
    );
}