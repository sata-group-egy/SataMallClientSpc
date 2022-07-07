import React from "react";

const PrevArrow = React.forwardRef((props, ref) => {
  return (
    <span className="arrow-left d-none" onClick={props.onClick} ref={ref}>
      <i className="fa-solid fa-chevron-left"></i>
    </span>
  );
});

export default PrevArrow;
