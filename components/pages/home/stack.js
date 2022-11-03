import { stacks } from "../../../providers/stack/data";
import React from 'react'

const Stack = () => {
    return (
        <section id="stack">
            <div className="stacks" data-aos="fade-up">
                <div className="stacks__header">
                    <h2>Our tech stack</h2>
                </div>
                <div className="stacks__container" >
                    <div className="stacks__body">
                        {
                            stacks?.map((stack, index) =>
                                <div key={index} className="stacks__item">
                                    <img src={stack.icon} alt="stack" width="80" height="100" />
                                    <p>{stack.name}</p>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Stack