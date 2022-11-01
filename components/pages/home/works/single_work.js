import React from 'react';

function SingleWork({link, image, title, description}) {
    return (
        <div style={{position: "static"}} className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
                <div className="item-folio__thumb">
                    <a
                        style={{
                            height: "80vh",
                            display: "flex",
                            justifyContent: "center"
                        }}
                        onClick={e => {
                            e.preventDefault();
                            window.open(image)
                        }} href="/images/portfolio/gallery/g-shutterbug.jpg" className="thumb-link"
                        title="Shutterbug" data-size="1050x700">
                        <img src={image}
                            /* srcSet={`${image} 1x, ${image} 2x`}*/
                             alt={title}/>
                    </a>
                </div>
                <div className="item-folio__text">
                    <h1 className="item-folio__title">
                        {title}
                    </h1>
                    <p className="item-folio__cat">
                        {description}
                    </p>
                </div>
                <a href={link} className="item-folio__project-link"
                   title="Project link">
                    <i className="icon-link"/>
                </a>
                <div className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
                        quo.Unde dolorem corrupti neque nisi.</p>
                </div>
            </div>
        </div>
    );
}

export default SingleWork;