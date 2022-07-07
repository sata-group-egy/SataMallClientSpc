import React from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { useFetchBrands } from "../../Private/Brands";
import "../../Styles/brands.css";
const Brands = () => {
  const prev = React.createRef();
  const next = React.createRef();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow ref={next} />,
    prevArrow: <PrevArrow ref={prev} />,
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
  };
  const { data } = useFetchBrands(false);
  return (
    <div className="container-fluid mt-4">
      <div className="brands-parent">
        <Slider {...settings}>
          {data?.data.map((brand) => (
            <div className="brand cursor-pointer" key={brand._id}>
              <div className="img-container">
                <img
                  src={`${process.env.REACT_APP_API_URL}/${brand.image}`}
                  alt=""
                />
              </div>
            </div>
          ))}
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="img-container">
              <img
                src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/bran5.jpg"
                alt=""
              />
            </div>
          </div>
        </Slider>
        <div className="arrow arrow-left" onClick={() => prev.current.click()}>
          <i className="fa-solid fa-caret-left"></i>
        </div>
        <div className="arrow arrow-right" onClick={() => next.current.click()}>
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Brands;
