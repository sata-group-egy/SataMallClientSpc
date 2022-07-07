import React from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import DispLang from "../Shared/DispLang";
import { FormattedMessage } from "react-intl";
import { useFetchCategories } from "../../Private/Category";
import { useNavigate } from "react-router-dom";
import "../../Styles/shop-by-category.css";

const ShopByCategory = () => {
  const prev = React.createRef();
  const next = React.createRef();
  const navigate = useNavigate();
  const { data } = useFetchCategories(false);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow ref={next} />,
    prevArrow: <PrevArrow ref={prev} />,
  };
  return (
    <div className="container-fluid">
      <div className={`shop-by-category  ${DispLang ? "ar" : "en"}`}>
        <h5 className="text-uppercase">
          <FormattedMessage id="ShopByCategory" />
        </h5>
      </div>
      <div className="category-relative">
        <div className="categories-shop-parent">
          <Slider {...settings}>
            {data?.data.data.map((cat) => (
              <div
                className="category"
                key={cat._id}
                onClick={() =>
                  navigate(
                    `/Search/Title/''/SubCategory/''/Brand/''/MinPrice/''/MaxPrice/''/Category/${
                      DispLang ? cat.title.en : cat.title.ar
                    }`
                  )
                }
              >
                <div className="img-container">
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${cat.image}`}
                    alt=""
                  />
                </div>
                <p className="category-title">
                  {DispLang ? cat.title.ar : cat.title.en}
                </p>
              </div>
            ))}
          </Slider>
        </div>
        <span
          className="arrows arrow-left"
          onClick={() => prev.current.click()}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        <span
          className="arrows arrow-right"
          onClick={() => next.current.click()}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </span>
      </div>
    </div>
  );
};

export default ShopByCategory;
