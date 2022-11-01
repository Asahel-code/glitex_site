import React from 'react';
import GalleryDetails from "../../components/pages/gallery/details";
import {portfolio} from "../../providers/portfolio/data";

function GalleryDetailsMain({galleryItem}) {
    return (
        <GalleryDetails galleryItem={galleryItem}/>
    );
}

export const getStaticProps = async ({params}) => {
    let galleryItem;
    try {
        const {id} = params;
        galleryItem = portfolio[id.substr(id.lastIndexOf("-") + 1)];
    } catch (e) {
        console.log(e);
    }

    return {
        props: {galleryItem: galleryItem || {}}
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

export default GalleryDetailsMain;