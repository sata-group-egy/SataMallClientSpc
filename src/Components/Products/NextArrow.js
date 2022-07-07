import React from "react";

const NextArrow = React.forwardRef((props, ref) => {
  return (
    <div className="arrow-right ms-2 d-none" onClick={props.onClick} ref={ref}>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
});

export default NextArrow;
