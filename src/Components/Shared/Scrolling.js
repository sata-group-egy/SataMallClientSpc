import { useState, useEffect } from "react";
import "../../Styles/scroll.css";

const Scrolling = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
    // eslint-disable-next-line
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <div
      className={`scroll-parent ${height < 100 && "d-none"}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <i className="fa-solid fa-plane-up"></i>
    </div>
  );
};

export default Scrolling;
