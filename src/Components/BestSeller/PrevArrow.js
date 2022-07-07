import React from "react";

const PrevArrow = React.forwardRef((props, ref) => {
  return (
    <span className="arrow arrow-left d-none" ref={ref} onClick={props.onClick}>
      <i className="fa-solid fa-chevron-left"></i>
    </span>
  );
});

export default PrevArrow;
