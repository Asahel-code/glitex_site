import React from 'react';
import Layout from "../../main/layout";
import styles from '../../../styles/global';
import galleryStyles from '../gallery/css/gallery.module.scss';
import { portfolio } from "../../../providers/portfolio/data";
import { getGallerySlug } from "../../../helpers/helpers";
import Head from 'next/head';

function TheGallery({ dontShowNav }) {
    let newPortfolio = dontShowNav ? portfolio.slice(0, 2) : portfolio;
    const body = (
        <div
            style={{
                paddingTop: "5rem",
                marginLeft: 0,
                marginRight: 0, 
            }}>
            {
                newPortfolio.map((galleryItem, index) =>
                    <SingleGalleryItem key={galleryItem?.id} index={index} galleryItem={galleryItem} />
                )
            }
        </div>
    );
    return (
        dontShowNav ? body :
            <Layout backgroundColor={"var(--primary)"}>
                <Head>
                    <title>Gallery</title>
                </Head>
                {body}
            </Layout>
    );
}

function SingleGalleryItem({
    galleryItem,
    index
}) {
    return (
        <div>
            <div className={galleryStyles.gallery__section}>
                <div className={`${galleryStyles.gallery__body} ${index % 2 === 1 ? galleryStyles.gallery__item__reverse : galleryStyles.gallery__item}`}>
                    <div className={`${galleryStyles.gallery__image__section} ${galleryStyles.flexCenter}  ${index % 2 === 1 ? galleryStyles.gallery__image__section__left : galleryStyles.gallery__image__section__right}`}>
                        <img src={galleryItem.image} alt="galleryItem" className={`${galleryStyles.gallery__image} ${index % 2 === 1 ? " fadeLeftMini" : " fadeRightMini"}`} />
                    </div>
                    <div className={`${galleryStyles.gallery__text__section} ${index % 2 === 1 ? "fadeRightMini" : "fadeLeftMini"}`}>
                        <h1 className={galleryStyles.gallery__text__section__title}>{galleryItem.name}</h1>
                        <p className={galleryStyles.gallery__text__section__description}>{galleryItem.description}</p>
                        <div className={galleryStyles.gallery__button__section}>
                            <span className={galleryStyles.gallery__button__section__button} onClick={() => { window.location.href = getGallerySlug(galleryItem, index); }}>
                                View more
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div
                style={{
                    backgroundImage: `url(${galleryItem.image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
                className={styles.container}>
                <div className={styles.center}/>

                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }} className={styles.bottom}>
                    <h1 style={{
                        marginTop: "1.5rem",
                        marginBottom: "1.5rem"
                    }} className="display-3">
                        {galleryItem.name}
                    </h1>
                    <p>
                        {galleryItem.description}
                    </p>
                </div>
            </div> */}
        </div>
    )
}

export default TheGallery;