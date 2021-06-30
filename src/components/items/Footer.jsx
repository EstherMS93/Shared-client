import "../../styles/footer.css"
import { ImInstagram } from 'react-icons/im';
import { ImGithub } from 'react-icons/im';
import { ImLinkedin } from 'react-icons/im';
import { FcCopyright } from 'react-icons/fc';

export default function Footer() {
  return (
    <div className="allFooter">
      <h3>Esther Martinez Saiz 2021 <FcCopyright /></h3>
      <div className="navigation-footer">
        <img src="/logo.png" alt="logo" className="logo-footer" />
        <div className="contact">
          <p>Contact</p>
          <br />
          <div>
            <a href="https://www.instagram.com/essmorgenstern/" className="nav-link">
              <ImInstagram className="nav-icon" />
            </a>
            <a href="https://github.com/EstherMS93" className="nav-link">
              <ImGithub className="nav-icon" />
            </a>
            <a href="https://linkedin.com/in/esther-martinez-saiz-7ba191148" className="nav-link">
              <ImLinkedin className="nav-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}