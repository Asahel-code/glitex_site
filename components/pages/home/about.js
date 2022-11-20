import styles from './css/home.module.scss';

const About = () => {
    return (
        <section id='about' className="s-about">
            <div className="row section-header has-bottom-sep" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead subhead--dark">Hello There</h3>
                    <h1 className="display-2">Software Development Company in Kenya | Glitex Solutions Limited</h1>
                </div>
            </div>
            <div className="row about-desc" data-aos="fade-up">
                <div className="col-full">
                    <p>Glitex Solutions Limited is a {' '}
                        <a className={"no-animation-hover"} href={"/software-development-company-in-kenya"}>
                            software development company
                        </a> based in Nairobi, Kenya dedicated to providing you with a
                        seamless transition into the digital experience in Kenya and Beyond the region.
                    </p>
                    <p>
                        We believe in transforming ideas into reality through technology and
                        are therefore dedicated to providing you
                        with quality software solutions for your personal and business
                        needs.

                        You can count on us to deliver the quality you need to push your business to
                        the next level.
                    </p>
                </div>
            </div>
            <div
                className={`${styles.d_flex} row justify-content-center about-stats stats block-1-4 block-m-1-2 block-mob-full`}
                data-aos="fade-up">
                {/*<div className="col-block stats__col ">
                    <div className="stats__count">127</div>
                    <h5>Awards Received</h5>
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count">1505</div>
                    <h5>Cups of Coffee</h5>
                </div>*/}
                {/*<div className="col-block stats__col"/>*/}
                <div className="col-block stats__col display-3">
                    <div style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <div className="stats__count">
                            67
                        </div>
                        <div className="stats__countt">
                            +
                        </div>
                    </div>
                    <h5>Projects Completed</h5>
                </div>
                <div className="col-block stats__col display-3">
                    <div style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <div className="stats__count">
                            113
                        </div>
                        <div className="stats__count">
                            +
                        </div>
                    </div>
                    <h5>Happy Clients</h5>
                </div>
            </div>
        </section>
    )
}

export default About;