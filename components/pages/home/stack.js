import { stacks } from "../../../providers/stack/data";
import React from 'react'

const Stack = () => {
    return (
        <section id="stack">
            <div style={{padding: "4rem"}} data-aos="fade-up">
                <div style={{textAlign: "center"}}>
                    <h2 style={{color: "#ffbf00", fontSize: "3.75rem", lineHeight: "1", fontWeight: "bold"}}>Our tech stack</h2>
                </div>
                <div style={{display: "flex", alignItems: "center", padding: "6rem 0"}}>
                    {
                        stacks?.map((stack, index) =>
                            <div style={{flexDirection: "column", justifyContent: "center", padding: "0 2.5rem"}}>
                                <img src={stack.icon} alt="stack" width="80" height="100" />
                                <p style={{color: "#fff"}}>{stack.name}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Stack