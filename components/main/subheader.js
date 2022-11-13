import React from 'react'

const SubHeader = ({title}) => {
  return (
    <div style={{width: "100%"}} className="suheader__body">
        <div className="subheader__content">
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default SubHeader