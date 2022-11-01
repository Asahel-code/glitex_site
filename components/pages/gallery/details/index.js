import React from 'react';
import Layout from "../../../main/layout";
import GalleryCards from "./gallery_cards";
import Head from 'next/head';
import {useRouter} from "next/router";


function GalleryDetails({galleryItem}) {
    return (
        <Layout backgroundColor={"var(--primary)"}>
            <Head>
                <title>{galleryItem.name} {' '}| Glitex Solutions Limited</title>
            </Head>
            <GalleryCards galleryItem={galleryItem}/>
        </Layout>
    );
}

export default GalleryDetails;