import React from 'react'

const Onboarding = () => {
    return (
        <section id="onboarding">
            <div className="onboarding">
                <div className="onboarding__container">
                    <div data-aos="fade-up">
                        <div className="row section-header">
                            <h3 className="onboarding__title">Our onboarding process</h3>
                            <div className="subhead__underline onboarding__underline">
                                <div className="subhead__underline__body"></div>
                            </div>
                        </div>
                        <div className="onboarding__body">
                            <div className="onboarding__message">
                                <p>
                                    We have deployed a BD process that allows us to
                                    serve our clients in the best way we know how to
                                </p>
                            </div>
                            <div className="onboarding__btn">
                                <span>View our onboarding process</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Onboarding