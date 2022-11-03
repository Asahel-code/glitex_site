import React from 'react'

const Onboarding = () => {
    return (
        <section id="onboarding">
            <div style={{ display:"flex", justifyContent:"center", alignItems: "center", backgroundColor: "#fff" }} className="bg-white flex justify-center items-center">
                <div className="onboarding__container">
                    <div className="row section-header" data-aos="fade-up">
                        <div className="">
                            <h3 style={{ color: "black", fontSize: "3.75rem", lineHeight: "1", fontWeight:"bold" }}>Our onboarding process</h3>
                            <div style={{padding: "0.75rem 0"}} className="subhead__underline">
                                <div className="subhead__underline__body"></div>
                            </div>
                            <div style={{margin: "0 8rem"}}>
                                <div style={{margin: "2.5rem 0", textAlign: "justify"}}>
                                    <p>
                                        We have deployed a BD process that allows us to
                                        serve our clients in the best way we know how to
                                    </p>
                                </div>
                                <div style={{textAlign: "center", backgroundColor: "#ffbf00", padding: "1rem 0", cursor: "pointer"}}>
                                    <span style={{color: "black", fontWeight: "600"}}>View our onboarding process</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Onboarding