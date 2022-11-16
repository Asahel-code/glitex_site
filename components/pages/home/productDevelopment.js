import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

const ProductDevelopment = () => {
    return (
        <div className="product-dev">
            <div style={{ width: "100%", padding: "4rem 8rem" }}>
                <div className="service-icon">
                    <div className="icon">
                        <FaLaptopCode />
                    </div>
                </div>
                <div className="product-dev-text">
                    <div style={{ textAlign: "center" }}>
                        <h3 className="h2">
                            Startup products development
                        </h3>
                    </div>
                    <p>
                        With out range of experience in building tech products, we take a special interest in helping founders transform their innovate ideas into actual products. With Glitex
                        you get a dedicated team that embarks on this journey with you. To most of our clients the products often act as an MVP to validate their hypothesis by helping with
                        iteractions of the product along the way. Our startup product development process looks is well defined and detailed to ensure you build user centric products.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDevelopment