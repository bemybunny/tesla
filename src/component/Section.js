import React from "react";
import Fade from "react-reveal/Fade";
import './section.css'

function Section({
  title,
  background_image,
  leftBtnText,
  rightBtnText,
  description,
}) {
  return (

    <div className="wrap" style={{ backgroundImage: `url(${  background_image})` }}>
      <Fade bottom>
        <div className="itemText">
          <span>{title}</span>
          <p>{description}</p>
        </div>
      </Fade>
      <div className="Buttons">
        <Fade bottom>
          <div className="buttonGroup">
            <div className="leftBtn">{leftBtnText}</div>
            {rightBtnText && <div className="rightBtn">{rightBtnText}</div>}
          </div>
          <div className="downArrow" >
              <img  src="down-arrow.svg" alt=""/>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Section;

