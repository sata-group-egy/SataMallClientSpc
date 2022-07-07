const PrevArrow = (props) => {
  return (
    <span className="arrow arrow-left" onClick={props.onClick}>
      <i className="fa-solid fa-chevron-left"></i>
    </span>
  );
};

export default PrevArrow;
