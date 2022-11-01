import React from 'react';
import AllServices from "../../components/pages/services";
import {services} from "../../providers/services/data";

function Services({
                      service,
                      id
                  }) {
    return (
        <AllServices id={id} service={service}/>
    );
}

export const getStaticProps = async ({params}) => {
    let service;
    let url;
    try {
        const {id} = params;
        url = id;
        service = services[id.substr(id.lastIndexOf("-") + 1)];
    } catch (e) {
        console.log(e);
    }

    return {
        props: {
            service: service || null,
            id: url
        }
    }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export default Services;