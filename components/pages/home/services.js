import { services } from "../../../providers/services/data";
import { getServiceSlug } from "../../../helpers/helpers";

const Services = () => {
    return (
        <section id='services' className="s-services">
            <div className="row section-header has-bottom-sep" data-aos="fade-up">
                <div className="col-full">
                    <h3 style={{ color: "black", fontSize: "3.75rem", lineHeight: "1", fontWeight:"bold" }}>What we do</h3>
                    <div style={{marginBottom: "4rem"}} className="subhead__underline">
                        <div className="subhead__underline__body"></div>
                    </div>
                    <h1 className="display-2">We’ve got the skills and workforce you can rely on
                        to push your business to the next level
                    </h1>
                </div>
            </div>
            <div className="row services-list block-1-3 block-tab-full">
                {
                    services?.map((service, index) =>
                        <div key={service?.id} className="col-block service-item" data-aos="fade-up">
                            <div className="service-icon">
                                <div className="icon">{service?.icon}</div>
                            </div>
                            <div key={service?.id} className="service-text">
                                <h3 className="h2">
                                    {service?.title}
                                </h3>
                                <p>
                                    {service.description}
                                </p>
                                <div className="service-link">
                                    <a href={`${getServiceSlug(service, index)}`} style={{ marginBottom: "7rem" }}
                                        className="service-link-btn">
                                        View projects
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Services;