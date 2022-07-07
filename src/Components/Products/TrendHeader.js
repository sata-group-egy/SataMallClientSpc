import { useState } from "react";
import { useFetchProdByCatId } from "../../Private/Products";
import { FormattedMessage } from "react-intl";
import Products from "./Products";
import "../../Styles/products.css";
import DispLang from "../Shared/DispLang";

const TrendHeader = ({ prev, next }) => {
  const [current, setCurrent] = useState("623b2eff2f9a4b07622b0f36");
  const { data } = useFetchProdByCatId(current);
  return (
    <div className="container-fluid mt-4">
      <div className="prod-header-title" dir={`${DispLang ? "rtl" : "ltr"}`}>
        <div className="title">
          <ul>
            <li className={`active ${DispLang ? "ar" : "en"}`}>
              {" "}
              <FormattedMessage id="TrendingProducts" />
            </li>
          </ul>
        </div>
        <div className="arrows">
          <ul className="product-cat-parent">
            <li
              onClick={() => setCurrent("623b2eff2f9a4b07622b0f36")}
              className={`${DispLang ? "ar" : "en"}`}
            >
              <FormattedMessage id="CollectionCategory" />
            </li>
            <li
              onClick={() => setCurrent("620e3bf9663e8a4178cb24d9")}
              className={`${DispLang ? "ar" : "en"}`}
            >
              <FormattedMessage id="ElectronicsCategory" />
            </li>
            <li
              onClick={() => setCurrent("623b2e622f9a4b07622b0f0d")}
              className={`${DispLang ? "ar" : "en"}`}
            >
              <FormattedMessage id="FurnitureCategory" />
            </li>
          </ul>
        </div>
      </div>
      <Products
        {...{ prev, next, whiteArrow: true, products: data?.data.data }}
      />
    </div>
  );
};

export default TrendHeader;
