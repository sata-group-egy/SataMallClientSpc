import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import React from "react";
import BestSellers from "./BestSellers";
import { useFetchMostBought } from "../../Private/Products";
import CartWishListView from "../Shared/CartWishListView";
import { FormattedMessage } from "react-intl";
import DispLang from "../Shared/DispLang";
import "../../Styles/best-sellers.css";

const BestSellerDeals = () => {
  const nextArrowRef = React.createRef();
  const prevArrowRef = React.createRef();
  const settings2 = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NextArrow ref={nextArrowRef} />,
    prevArrow: <PrevArrow ref={prevArrowRef} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { data } = useFetchMostBought();
  return (
    <div className="container-fluid">
      <div className="best-sellers-deals">
        <div className="row">
          <BestSellers />
          <div
            className="deals col-lg-4 col-md-12"
            style={{ marginTop: "-5px" }}
          >
            <div
              className={`title p-2 pe-0 ${DispLang ? "ar" : "en"}`}
              dir={`${DispLang ? "ltr" : "rtl"}`}
            >
              <div className="right">
                {!DispLang ? (
                  <>
                    <span
                      className="arrow arrow-right"
                      onClick={() => nextArrowRef.current.click()}
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                    <span
                      className="arrow arrow-left"
                      onClick={() => prevArrowRef.current.click()}
                    >
                      <i className="fa-solid fa-chevron-left"></i>
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className="arrow arrow-left"
                      onClick={() => prevArrowRef.current.click()}
                    >
                      <i className="fa-solid fa-chevron-left"></i>
                    </span>
                    <span
                      className="arrow arrow-right"
                      onClick={() => nextArrowRef.current.click()}
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </>
                )}
              </div>
              <div className="left">
                <h5 className="fw-bold text-uppercase">
                  <FormattedMessage id="DailyOffers" />
                </h5>
              </div>
            </div>
            <Slider {...settings2}>
              {data?.data.data.map((prod) => (
                <div className="product-deal p-2 mt-1" key={prod._id}>
                  <div className="img-container">
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${prod.image}`}
                      alt=""
                      height={"395"}
                      width={"395"}
                      className="m-auto"
                    />
                  </div>
                  <CartWishListView {...{ prod }} />
                  <div className="prod-title text-center">
                    <h5 className="fw-bold">
                      {DispLang ? prod.title.ar : prod.title.en}
                    </h5>
                  </div>
                  <div className="prod-price text-center">
                    <h5 className="fw-bold"> {prod.price} LE</h5>
                  </div>
                  <div className="prod-deal-request">
                    <div className="day">
                      {" "}
                      <span className="value">671</span>{" "}
                    </div>
                    <div className="hour">
                      <span className="value">20</span>
                    </div>
                    <div className="minute">
                      <span className="value">36</span>
                    </div>
                    <div className="second">
                      <span className="value">59</span>
                    </div>
                  </div>
                  <div className="prod-deal-request">
                    {" "}
                    <span className="value ms-4 text-uppercase fw-bold">
                      <FormattedMessage id="Day" />
                    </span>{" "}
                    <span className="value ms-4 text-uppercase fw-bold">
                      <FormattedMessage id="Hour" />
                    </span>
                    <span className="value ms-4 text-uppercase fw-bold">
                      <FormattedMessage id="Minute" />
                    </span>
                    <span className="value ms-4 text-uppercase fw-bold">
                      <FormattedMessage id="Second" />
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerDeals;
