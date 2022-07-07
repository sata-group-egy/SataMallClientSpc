import React from "react";

const NextArrow = React.forwardRef((props, ref) => {
  return (
    <span
      className="arrow arrow-right d-none"
      onClick={props.onClick}
      ref={ref}
    >
      <i className="fa-solid fa-chevron-right"></i>
    </span>
  );
});
export default NextArrow;
