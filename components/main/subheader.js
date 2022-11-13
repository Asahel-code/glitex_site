import React from 'react';
import bgImage from "../../public/images/home_background.jpg";

const SubHeader = ({title}) => {
  return (
    <div className="suheader__body" style={{backgroundImage: `url('${bgImage}')`, width: "100%"}}>
        <div className="subheader__content">
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default SubHeader