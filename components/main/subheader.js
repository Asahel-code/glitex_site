import React from 'react';
import bgImage from "../../public/images/home_background.jpg";

const SubHeader = ({ title }) => {
  return (
    <section className="suheader__body"
      data-image-src="/images/home_background.jpg"
      data-natural-height="2000" data-position-y="center"
    >
      <div className="subheader__content">
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default SubHeader