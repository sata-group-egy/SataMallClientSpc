import React, { useState } from "react";
import { useFetchNews } from "../../Private/Products";
import Products from "./Products";
import DispLang from "../Shared/DispLang";
import { FormattedMessage } from "react-intl";
import "../../Styles/products.css";

const ProdHeader = () => {
  const [current, setCurrent] = useState(1);
  const prev = React.createRef();
  const next = React.createRef();
  const { data } = useFetchNews();
  return (
    <div className="container-fluid mt-4">
      <div className="prod-header-title" dir={`${DispLang ? "rtl" : "ltr"}`}>
        <div className="title">
          <ul>
            <li
              className={`${current === 1 ? "active" : ""} ${
                DispLang ? "ar" : "en"
              } text-uppercase`}
              // put en instead of arabic in english
              onClick={() => setCurrent(1)}
            >
              <FormattedMessage id="NewProducts" />
            </li>
            <li
              className={`${current === 2 ? "active" : ""} ${
                DispLang ? "ar" : "en"
              } text-uppercase`}
              // put en instead of arabic in english
              onClick={() => setCurrent(2)}
            >
              {" "}
              <FormattedMessage id="BestProducts" />
            </li>
            <li
              className={`${current === 3 ? "active" : ""} ${
                DispLang ? "ar" : "en"
              } text-uppercase`}
              // put en instead of arabic in english
              onClick={() => setCurrent(3)}
            >
              {" "}
              <FormattedMessage id="FeaturedProducts" />
            </li>
          </ul>
        </div>
        <div className="arrows">
          {/* Replace when english  */}
          {DispLang ? (
            <>
              <span
                className="arrow-right ms-2"
                onClick={() => next.current.click()}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              <span className="arrow-left" onClick={() => prev.current.click()}>
                <i className="fa-solid fa-chevron-left"></i>
              </span>
            </>
          ) : (
            <>
              <span className="arrow-left" onClick={() => prev.current.click()}>
                <i className="fa-solid fa-chevron-left"></i>
              </span>
              <span
                className="arrow-right ms-2"
                onClick={() => next.current.click()}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </>
          )}
        </div>
      </div>
      <Products {...{ next, prev, products: data?.data.data }} />
    </div>
  );
};

export default ProdHeader;
