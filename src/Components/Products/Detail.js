import BreadCrumb from "../Shared/BreadCrumb";
import { useState, useRef } from "react";
import { useFindById } from "../../Private/Products";
import { useParams } from "react-router-dom";
import Aside from "./Aside";
import Reviews from "./Reviews";
import AddToCartOrWishList from "./AddToCartOrWishList";
import DispLang from "../Shared/DispLang";
import "../../Styles/product-detail.css";
import { FormattedMessage } from "react-intl";
const Detail = () => {
  const { id } = useParams();
  const [active, setActive] = useState(-1);
  const { data } = useFindById(id);
  const imgRef = useRef(null);

  return (
    <>
      <BreadCrumb
        dataList={[
          DispLang ? "الرئيسية" : "Home",
          DispLang ? "المنتجات" : "Products",
          DispLang
            ? data?.data.data.product.title.ar
            : data?.data.data.product.title.en,
        ]}
      />
      <div className="container-fluid">
        <div
          className="product-detail-prent"
          dir={`${DispLang ? "rtl" : "ltr"}`}
        >
          <div className="row">
            <Aside />
            <div className="col-lg-9 order-lg-2 order-md-1 order-sm-1">
              <div className="img-detail d-lg-flex">
                <div className="img-albums">
                  <div className="prod-main-img text-center">
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${data?.data.data.product.image}`}
                      alt=""
                      ref={imgRef}
                    />
                  </div>
                  <div className="albums">
                    <div className="img-album-container mt-2 m-auto text-center">
                      {data?.data.data.albums.length > 0 && (
                        <img
                          src={`${process.env.REACT_APP_API_URL}/${data?.data.data.product.image}`}
                          alt=""
                          className={`${active === -1 ? "active" : ""}`}
                          onClick={() => {
                            setActive(-1);
                            imgRef.current.src = `${process.env.REACT_APP_API_URL}/${data?.data.data.product.image}`;
                          }}
                        />
                      )}
                      {data?.data.data.albums.map((album, i) => (
                        <img
                          src={`${process.env.REACT_APP_API_URL}/${album.image}`}
                          alt=""
                          className={`${active === i ? "active" : ""}`}
                          onClick={() => {
                            setActive(i);
                            imgRef.current.src = `${process.env.REACT_APP_API_URL}/${album.image}`;
                          }}
                          key={album._id}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="img-description">
                  <h4 className="fw-bold">
                    {DispLang
                      ? data?.data.data.product.title.ar
                      : data?.data.data.product.title.en}
                  </h4>
                  <div className="stars mt-3">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="me-2">
                      {" "}
                      <FormattedMessage id="ShowReviews" />{" "}
                    </span>
                  </div>
                  <div className="real-price mt-3">
                    <p>
                      <FormattedMessage id="Price" />{" "}
                    </p>
                    <h4 className="fw-bold">
                      {" "}
                      <bdi>LE</bdi> {data?.data.data.product.price}{" "}
                    </h4>
                  </div>
                  <div className="product-description mt-4">
                    <p className="fw-bold h5">
                      {" "}
                      <FormattedMessage id="ProductDesc" />{" "}
                    </p>
                    <p className="mt-3 desc-prod text-muted">
                      {DispLang
                        ? data?.data.data.product.description.ar.slice(0, 45)
                        : data?.data.data.product.description.en.slice(0, 45)}
                    </p>
                  </div>
                  <AddToCartOrWishList data={data} />
                </div>
              </div>
              <Reviews {...{ data, id }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
