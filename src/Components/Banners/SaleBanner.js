import Slider from "react-slick";
import { useFetchBannersByType } from "../../Private/Banners";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import "../../Styles/banners.css";

const SaleBanner = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "140px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const { data } = useFetchBannersByType("not-active");
  return (
    <div className="container mt-4">
      <div className="banners-sale-parent">
        <Slider {...settings}>
          {data?.data.data.map((banner) => (
            <div
              className={`img-container ${banner.isActive && "d-none"}`}
              key={banner._id}
            >
              <img
                src={`${process.env.REACT_APP_API_URL}/${banner.image}`}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SaleBanner;
