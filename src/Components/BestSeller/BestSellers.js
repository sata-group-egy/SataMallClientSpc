import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useFetchProdByCatId } from "../../Private/Products";
import CartWishListView from "../Shared/CartWishListView";
import Slider from "react-slick";
import DispLang from "../Shared/DispLang";

const BestSellers = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
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
  const [catId, setCatId] = useState("623b2eff2f9a4b07622b0f36");
  const { data } = useFetchProdByCatId(catId);
  return (
    <div className="col-lg-8 col-md-12">
      <div
        className={`title ${DispLang ? "ar" : "en"}`}
        dir={`${DispLang ? "ltr" : "rtl"}`}
      >
        <div className="right">
          <ul className={`${DispLang ? "en" : "ar"}`}>
            <li
              onClick={() => setCatId("623b2eff2f9a4b07622b0f36")}
              className={`${DispLang ? "ar" : "en"}`}
            >
              <FormattedMessage id="CollectionCategory" />
            </li>
            <li
              onClick={() => setCatId("620e3bf9663e8a4178cb24d9")}
              className={`${DispLang ? "ar" : "en"}`}
            >
              <FormattedMessage id="ElectronicsCategory" />
            </li>
            <li
              onClick={() => setCatId("623b2e622f9a4b07622b0f0d")}
              className={`${DispLang ? "ar" : "en"}`}
            >
              <FormattedMessage id="FurnitureCategory" />
            </li>
          </ul>
        </div>
        <div className="left">
          <h5 className="fw-bold text-uppercase">
            <FormattedMessage id="BestSellers" />
          </h5>
        </div>
      </div>
      <div className="products">
        <Slider {...settings}>
          {data?.data.data.map((prod) => (
            <div className="product" key={prod._id}>
              <div className="img-container">
                <img
                  src={`${process.env.REACT_APP_API_URL}/${prod.image}`}
                  alt=""
                />
              </div>
              <div className="price">
                <h5>{prod.price} LE</h5>
              </div>
              <div className="prod-title">
                <h4>{DispLang ? prod.title.ar : prod.title.en}</h4>
              </div>
              <CartWishListView {...{ prod }} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSellers;
