import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://github.com/t-ageru24" className="logo">
        <span>www.t_</span>
        <span>ageru13.in</span>
      </a>
      <div>
        <p>
          Happy to see you here, thank you for visiting my website!
          <img src={reactIcon} alt="React" />
          <span>❤️</span>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/t-ageru13/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/t-ageru24"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        {/* <a
          href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a> */}
        <a
          href="https://t.me/t_ageru24"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
        {/* <a
          href="https://www.instagram.com/vinayaksingh.in"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a> */}
      </div>
    </Container>
  )
}
