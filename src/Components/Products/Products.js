import Slider from "react-slick";
import CartWishListView from "../Shared/CartWishListView";
import DispLang from "../Shared/DispLang";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

// هنا انا مستخدم الوايت ارو ديه عشان ظاهره فى المنتجات الشائعة
const Products = ({ next, prev, whiteArrow, products }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow ref={next} />,
    prevArrow: <PrevArrow ref={prev} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`products-parent ${whiteArrow && "white-arrows"}`}>
      <Slider {...settings}>
        {products &&
          products.map((prod) => (
            <div className="product" key={prod._id}>
              <div className="img-container">
                <img
                  src={`${process.env.REACT_APP_API_URL}/${prod.image}`}
                  alt=""
                  width={"250"}
                  height={"250"}
                />
              </div>
              <div className="product-title">
                <h5 className="fw-bold">
                  {" "}
                  {DispLang ? prod.title.ar : prod.title.en}
                </h5>
              </div>
              <div className="product-price">
                <h5>{prod.price} LE</h5>
              </div>
              <CartWishListView {...{ prod }} />
            </div>
          ))}
      </Slider>

      {whiteArrow && (
        <>
          <span
            className="arrow arrow-left"
            onClick={() => prev.current.click()}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </span>
          <span
            className="arrow arrow-right"
            onClick={() => next.current.click()}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </>
      )}
    </div>
  );
};

export default Products;
