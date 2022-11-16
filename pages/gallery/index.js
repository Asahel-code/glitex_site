import React from 'react';
import SubHeader from '../../components/main/subheader';
import TheGallery from "../../components/pages/gallery";
import Footer from "../../components/pages/home/footer";

function Gallery() {
    return (
        <>
            <SubHeader title="Our portfolio"/>
            <TheGallery />
            <Footer />
        </>

    );
}

export default Gallery;