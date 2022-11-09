import { useEffect, useState } from "react";
import styles from './css/header.module.scss';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Header = () => {
    const [isIndex, setIsIndex] = useState();

    useEffect(() => {
        setIsIndex(window.location.pathname === "/");
    })
    return (
        <header className="s-header">
            <div className="header-logo">
                <img style={{
                    height: "7rem",
                    marginTop: "2rem"
                }} src={"/images/logo.png"} alt="Glitex Solutions LTD" />
            </div>
            <nav className="header-nav">
                <a href="#0" className="header-nav__close" title="close"><span>Close</span></a>
                <div className="header-nav__content">
                    <h3>Navigation</h3>
                    <ul className="header-nav__list">
                        <li className="current"><a className={isIndex ? "smoothscroll" : ""}
                            href={`${!isIndex ? "/" : ""}#home`}
                            title="home">Home</a>
                        </li>
                        <li><a className={isIndex ? "smoothscroll" : ""} href={`${!isIndex ? "/" : ""}#clients`}
                            title="clients">Clients</a>
                        </li>
                        <li>
                            <a className={isIndex ? "smoothscroll" : ""} href={`${!isIndex ? "/" : ""}#about`}
                                title="about">About</a>
                        </li>
                        <li><a className={isIndex ? "smoothscroll" : ""} href={`${!isIndex ? "/" : ""}#team`}
                            title="services">Our team</a>
                        </li>
                        <li><a className={isIndex ? "smoothscroll" : ""} href={`${!isIndex ? "/" : ""}#services`}
                            title="services">Services</a>
                        </li>
                        <li><a className={isIndex ? "smoothscroll" : ""} href={`${!isIndex ? "/" : ""}#works`}
                            title="works">Portfolio</a>
                        </li>
                        <li><a className={isIndex ? "smoothscroll" : ""} href={`${!isIndex ? "/" : ""}#onboarding`}
                            title="works">Onboarding process</a>
                        </li>
                        <li><a href={`/gallery`}
                            title="clients">Gallery</a>
                        </li>
                        <li><a className={isIndex ? "smoothscroll" : ""} href={`${!isIndex ? "/" : ""}#contact`}
                            title="contact">Contact</a>
                        </li>
                    </ul>
                    <h5 style={{ color: "white" }}>Email Us At</h5>
                    <p>
                        <a href="mailto:business@glitexsolutions.co.ke" className="__cf_email__">
                            Business@glitexsolutions.co.ke
                        </a><br />
                        <a href="mailto:info@glitexsolutions.co.ke" className="__cf_email__">
                            Info@glitexsolutions.co.ke
                        </a>
                    </p>
                    <h5 style={{ color: "white" }}>Call Us On</h5>
                    <p>
                        Phone: (+254) 707021821
                    </p>
                    <ul className="header-nav__social">
                        <li>
                            <a href="https://www.facebook.com/glitexsolutions/">
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/GlitexSolutions">
                                <BsTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/glitexsolutions/">
                                <BsInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/glitex-solutions/">
                                <BsLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <span
                style={{
                    color: "White",
                    fontSize: "1rem",
                }}
                className="header-menu-toggle" href="#0">
                <a
                    style={{
                        width: "290px"
                    }}
                    className={`header-menu-text ${styles.menu_toggle}`}>
                    {" "}
                    <a style={{
                        fontSize: "1.4rem",
                        color: "white"
                    }} className={styles.header_num}>Call - 0707 021 821</a>

                </a>
                <span className="header-menu-icon" />
            </span>
        </header>
    )
}

export default Header;
