import { useFilterProducts } from "../../Private/Products";
import BreadCrumb from "../Shared/BreadCrumb";
import SideBar from "./SideBar";
import CartWishListView from "../Shared/CartWishListView";
import DispLang from "../Shared/DispLang";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import "../../Styles/search.css";
const Search = () => {
  const { title, SubCategory, Brand, MinPrice, MaxPrice, Category } =
    useParams();
  const { data } = useFilterProducts(
    title,
    SubCategory,
    Brand,
    MinPrice,
    MaxPrice,
    Category
  );
  return (
    <>
      <BreadCrumb
        dataList={[DispLang ? `الرئيسية` : "Home", DispLang ? "بحث" : "Search"]}
      />
      <div
        className="search-parent mt-3 mb-3"
        dir={`${DispLang ? "rtl" : "ltr"}`}
      >
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <div className="col-9">
              <div className="row">
                {data?.data.data.length === 0 ? (
                  <h1 className="fw-bold">
                    {" "}
                    <FormattedMessage id="NoSearchResult" />{" "}
                  </h1>
                ) : (
                  data?.data.data.map((prod) => {
                    return (
                      <div
                        className="col-4 product-search cursor-pointer"
                        key={prod._id}
                      >
                        <div className="img-container">
                          <img
                            src={`${process.env.REACT_APP_API_URL}/${prod.image}`}
                            alt=""
                          />
                        </div>
                        <div className="prod-title">
                          <h5
                            className="fw-bold text-center mt-2 mb-0"
                            style={{ lineHeight: "1.2" }}
                          >
                            {DispLang ? prod.title.ar : prod.title.en}
                          </h5>
                        </div>
                        <div className="img-detail d-flex align-items-center justify-content-between pe-3 ps-3 pt-1">
                          <div className="by-whom">
                            <i className="fa-solid fa-user text-muted ms-1"></i>
                            <span
                              className="text-muted"
                              title={prod.Vendor[0].fullname}
                            >
                              {prod.Vendor[0].fullname}
                            </span>
                          </div>
                          <div className="prod-price">
                            <i className="fa-solid fa-sack-dollar text-muted ms-1"></i>
                            <span className="text-muted">{prod.price} LE</span>
                          </div>
                        </div>
                        <div className="img-detail d-flex align-items-center justify-content-between pe-3 ps-3 pt-1 pb-3">
                          <div className="by-whom">
                            <i className="fa-solid fa-list text-muted ms-1"></i>
                            <span className="text-muted">
                              {DispLang
                                ? prod.prodCategory[0].title.ar
                                : prod.prodCategory[0].title.en}
                            </span>
                          </div>
                          <div className="prod-price">
                            <i className="fa-brands fa-atlassian text-muted ms-1"></i>
                            <span className="text-muted">
                              {" "}
                              {DispLang
                                ? prod.prodBrands[0].title.ar
                                : prod.prodBrands[0].title.en}{" "}
                            </span>
                          </div>
                        </div>
                        <CartWishListView {...{ prod }} />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
