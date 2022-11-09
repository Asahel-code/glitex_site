import styles from './css/home.module.scss';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Home = ({ home }) => {
    return (
        <section id="home" className="s-home target-section"
            data-parallax="scroll"
            data-image-src="/images/home_background.jpg"
            data-natural-width="3000" data-natural-height="2000" data-position-y="center">
            <div className="overlay" />
            <div className="shadow-overlay" />
            <div className="home-content">
                <div className="row home-content__main">
                    {/* <div className={styles.title_header}>
                        <img className={`${styles.title_header_image} text-banner`} alt={'glitex'}
                             src={"/images/yellow_bar.png"}
                        />
                    </div> */}
                    <h1 className={styles.title_header_text}>
                        GLITEX
                    </h1>
                    <h1 style={{ color: 'var(--primary)' }} className="display-3">
                        Solutions Limited
                    </h1>
                    <h3 className="display-3">
                        You Deserve Quality.
                    </h3>
                    <div className="home-content__buttons">
                        <a href="#contact" className="smoothscroll btn btn--primary">
                            Enquire
                        </a>
                        <a href="#about" className="smoothscroll btn btn--stroke">
                            More About Us
                        </a>
                    </div>
                    <div className="home-content__scroll">
                        <a href="#about" className="scroll-link smoothscroll">
                            <span>Scroll Down</span>
                        </a>
                    </div>
                </div>
            </div>
            <ul className="home-social">
                <li>
                    <a
                        href="https://web.facebook.com/glitexsolutionslimited">
                        <BsFacebook style={{
                            border: "2px solid var(--primary)",
                            padding: "10px",
                            borderRadius: "50%",
                            color: "#ffffff"
                        }}
                            aria-hidden="true" /><span>Facebook</span></a>
                </li>
                <li>
                    <a href="https://twitter.com/GlitexSolutions">
                        <BsTwitter style={{
                            border: "2px solid var(--primary)",
                            padding: "10px",
                            borderRadius: "50%",
                            color: "#ffffff"
                        }}
                            aria-hidden="true" /><span>Twiiter</span></a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/glitexsolutions/">
                        <BsInstagram style={{
                            border: "2px solid var(--primary)",
                            padding: "10px",
                            borderRadius: "50%",
                            color: "#ffffff"
                        }}
                            aria-hidden="true" /><span>Instagram</span></a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/glitex-solutions/">
                        <BsLinkedin style={{
                            border: "2px solid var(--primary)",
                            padding: "10px",
                            borderRadius: "50%",
                            color: "#ffffff"
                        }}
                            aria-hidden="true" /><span>LinkedIn</span></a>
                </li>
                {/*<li>
                    <a href="#0"><i className="fa fa-youtube" aria-hidden="true"/><span>YouTube</span></a>
                </li>*/}
            </ul>
        </section>
    )
}

export default Home;