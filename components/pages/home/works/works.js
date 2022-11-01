import TheGallery from "../../gallery";

const Works = () => {
    return (
        <section
            style={{
                paddingBottom: 0,
                backgroundColor: "#ffbf00",
            }} id='works'>
            <div style={{
                paddingBottom: 0,
                paddingTop: "5rem",

            }}>
                <div style={{ marginBottom: "0" }} className="row section-header" data-aos="fade-up">
                    <div className="col-full">
                        <h1 style={{fontWeight: "bold", fontSize: "3.75rem", lineHeight: "1"}}>What we have done so far</h1>
                        <div className="subhead__underline">
                            <div style={{backgroundColor: "#000"}} className="subhead__underline__body"></div>
                        </div>
                        {/* <h1 className="display-2 display-2--light">We love what we do, check out some of our latest
                            projects</h1> */}
                    </div>
                </div>
            </div>
            <div style={{
                paddingBottom: 0,
            }} className="intro-wrap">
                <TheGallery dontShowNav={true} />
            </div>
            <div style={{
                paddingBottom: "10rem"
            }}>
                <div style={{
                    marginTop: "0",
                }} className="works-content">
                    <div className="text-center">
                        <a style={{ 
                            marginTop: "5rem", 
                            color: "#ffbf00",
                            backgroundColor: "#000",
                            border: "none"
                        }}
                            href={"/gallery"} className="btn">View our portfolio</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;