import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchCategories } from "../../Private/Category";
import { useFetchLatest } from "../../Private/Products";
import { FormattedMessage } from "react-intl";
import DispLang from "../Shared/DispLang";
const Aside = () => {
  const [more, setMore] = useState(false);
  const { data: categories } = useFetchCategories(false);
  const { data: latest } = useFetchLatest();
  return (
    <div className="col-lg-3 order-lg-1 order-md-2 order-sm-2 ">
      <div className="category-titles">
        <h5 className="cat-head">
          <FormattedMessage id="Categories" />{" "}
        </h5>
        <ul>
          {categories?.data.data.slice(0, 8).map((cat) => (
            <li key={cat._id} className={`${DispLang ? "en" : "ar"}`}>
              {DispLang ? cat.title.ar : cat.title.en}
            </li>
          ))}
          <li
            className={` more-or-less ${more ? "d-none" : "d-block"} ${
              DispLang ? "en" : "ar"
            }`}
            onClick={() => {
              setMore(!more);
            }}
          >
            <FormattedMessage id="ShowMore" />{" "}
            <i className="me-2 fa-solid fa-chevron-down"></i>
          </li>
          {more && (
            <span>
              {categories?.data.data.slice(8).map((cat) => (
                <li key={cat._id} className={`${DispLang ? "en" : "ar"}`}>
                  {DispLang ? cat.title.ar : cat.title.en}
                </li>
              ))}
            </span>
          )}
          <li
            className={`${!more ? "d-none" : "d-block"} more-or-less ${
              DispLang ? "en" : "ar"
            }`}
            onClick={() => {
              setMore(!more);
            }}
          >
            <FormattedMessage id="ShowLess" />{" "}
            <i className="me-2 fa-solid fa-chevron-up"></i>
          </li>
        </ul>
      </div>
      <div className="prod-best-seller">
        <h5 className="prod-best-seller-head">
          {" "}
          <FormattedMessage id="LatestProducts" />{" "}
        </h5>
        <ul>
          {latest?.data.data.map((prod) => (
            <li key={prod._id}>
              <div className="prod-best-title">
                <h6>{DispLang ? prod.title.ar : prod.title.en}</h6>
                <h6 className="prod-best-price text-right">{prod.price} LE</h6>
              </div>
              <div className="img-container">
                <Link to={`/product/${prod._id}`}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${prod.image}`}
                    alt=""
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
