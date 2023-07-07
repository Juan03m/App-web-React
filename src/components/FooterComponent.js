import '../css/FooterComponent.css';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faDiscord, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons'

function FooterComponent(){
    const items = [
        {
          path: 'https://www.facebook.com',
          label: <FontAwesomeIcon icon={faFacebook} />,
        },
        {
          path: 'https://www.twitter.com',
          label: <FontAwesomeIcon icon={faTwitter} />,
        },
        {
          path: 'https://www.instagram.com',
          label: <FontAwesomeIcon icon={faInstagram} />,
        },
        {
          path: 'https://www.discord.com',
          label: <FontAwesomeIcon icon={faDiscord} />,
        },
        {
          path: 'https://www.twitch.com',
          label: <FontAwesomeIcon icon={faTwitch} />,
        },
        {
          path: 'https://www.youtube.com',
          label: <FontAwesomeIcon icon={faYoutube} />,
        },
      ];
    return (
        <footer className="pie">
            <div className="container bloques">
                <div><a href="./"><img src={logo} alt="Logo" height="24"/></a></div>
                <div>Development by Juan Cruz Mazullo & Agustín Gustavo López &copy; 2023</div>
                <nav id="social-icons">
                    <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                        <NavLink to={item.path}>
                            {item.label}
                        </NavLink>
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default FooterComponent;
