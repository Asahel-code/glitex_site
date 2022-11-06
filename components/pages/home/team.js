import { team } from "../../../providers/team/data";
import React, {useLayoutEffect, useRef, useState} from 'react';
import { CiCircleChevRight } from 'react-icons/ci';

const Team = () => {

  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    setWidth(imageRef.current.offsetWidth);
  }, []);

  const handleScroll = () => {
    containerRef.current.scrollLeft += width;
  }

  return (
    <section id="team">
      <div className="team" data-aos="fade-up">
        <h2 className="team__header">Meet our team</h2>
        <div className="team__body">
          <div className="team__images__container">
            <div className="team__images__content" ref={containerRef}>
              {
                team.map((member, index) =>
                  <div className="team__image" key={index} ref={imageRef}>
                    <img src={member.image} alt="team member" />
                    <div className="team__member__info">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          <div className="navigator">
            <CiCircleChevRight onClick={handleScroll} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team