import React from 'react';
import Layout from "../../main/layout";
import Footer from "../home/footer";
import SubHeader from "../../main/subheader";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './css/services.module.scss';
import Head from 'next/head';
import { SingleGalleryItem } from '../gallery';

const alignCenter = {
    display: 'flex',
    alignItems: 'center',
    width: "100%",
}

function AllServices({
    service,
    id
}) {
    const children = [];
    if (service)
        for (let i = 0; i < service.pages.length; i++) {
            let offset = i;
            let page = service.pages[i];
            // children.push(
            //     <ParallaxLayer
            //         key={`p${i}`}
            //         sticky={{
            //             start: offset,
            //             end: offset + 1
            //         }}
            //         style={{
            //             // backgroundImage: `url('${page.banner}')`,
            //             // backgroundSize: "cover",
            //             // width: "100%",
            //             // zIndex: -1
            //         }}>
            //     </ParallaxLayer>);

            // children.push(
            //     <ParallaxLayer
            //         key={`o${i}`}
            //         // sticky={{
            //         //     start: offset,
            //         //     end: offset + 1
            //         // }}
            //         style={{
            //             background: "#ffbf00",
            //             width: "100%",
            //             zIndex: -1
            //         }}>
            //     </ParallaxLayer>);

            // children.push(<ParallaxLayer
            //     key={`g${i}`}
            //     offset={offset}
            //     style={{
            //         ...alignCenter,
            //         justifyContent: 'flex-start'
            //     }}>
            //     <div className={styles.parallax_description}>
            //         <h1 style={{
            //             color: "black",
            //             marginBottom: "2rem"
            //         }} className="display-2">
            //             {page.title || service.title}
            //         </h1>
            //         {(service.subtitle || page.subtitle) &&
            //             <h2 style={{
            //                 color: "black",
            //                 marginTop: "2rem"
            //             }} className="service-detail-subtitle">
            //                 {page.subtitle || service.subtitle}
            //             </h2>
            //         }
            //         <p style={{ color: "black" }}>{page.description}</p>
            //     </div>
            // </ParallaxLayer>
            // );
        }
    return (
        <Layout>
            <Head>
                <title>{service?.title}{' '}| Glitex Solutions Limited</title>
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description"
                    content={service?.meta?.description || service?.description || ""} />
                <meta name="keywords"
                    content={service?.meta?.keywords} />
                <link rel="canonical"
                    href={`https://glitexsolutions.co.ke/services/${id}`} />

                <meta property="og:site_name" content="Glitex Solutions Limited" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://glitexsolutions.co.ke/" />
                <meta property="og:title"
                    content={service?.title || ""} />

                <meta property="og:description"
                    content={service?.meta?.description || service?.description || ""} />
            </Head>
            <SubHeader title={service?.title} />
            {/* <Parallax pages={service?.pages?.length ?? 1} className={"service-detail-body"}>
                {children.length > 0 ? children :
                    <ParallaxLayer
                        offset={0}
                        style={{
                            ...alignCenter,
                            justifyContent: 'center'
                        }}>
                        <div style={{alignItems: "center"}} className={styles.parallax_description}>
                            <h1 style={{color: "white"}} className="display-2">
                                Not Found
                            </h1>
                            <a href="/" className="smoothscroll btn btn--primary">
                                Go Home
                            </a>
                        </div>
                    </ParallaxLayer>
                }
            </Parallax> */}
            <div className={styles.service}>
                <div className={styles.service__title}>
                    <h3>{service?.subtitle || ""}</h3>
                    <p>{service?.description || ""}</p>
                </div>
                <div>
                    {service?.pages.map((page, index) =>
                        <SingleGalleryItem key={index} index={index} galleryItem={page} />
                    )}
                </div>
            </div>
            <Footer />
        </Layout>
    );
}

export default AllServices;