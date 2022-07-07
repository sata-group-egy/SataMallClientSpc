const NextArrow = (props) => {
  return (
    <span className="arrow arrow-right" onClick={props.onClick}>
      <i className="fa-solid fa-chevron-right"></i>
    </span>
  );
};

export default NextArrow;
