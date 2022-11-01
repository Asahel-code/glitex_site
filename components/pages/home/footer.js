const Footer = () => {
    const headingStyles = {
        color: "white", margin: "1rem"
    }
    return (
        <footer>
            <div className="row footer-main">
                <div className="col-twelve tab-full left footer-desc">
                    <div style={{height: "13rem"}} className="footer-logo"/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h3 style={headingStyles}>
                            Glitex Solutions Limited |
                            You Deserve Quality</h3>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h3 style={headingStyles}>
                            Royal Plaza, Lumumba Drive
                        </h3>
                    </div>
                </div>
            </div>
            <div className="row footer-bottom">
                <div className="col-twelve">
                    <div className="copyright">
                        <span>© Copyright Glitex Solutions {new Date().getFullYear()}</span>
                    </div>
                    <div className="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#top">
                            <i className="icon-arrow-up"
                               aria-hidden="true"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;