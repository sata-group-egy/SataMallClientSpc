import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useFetchUserCart, useDeleteFromCart } from "../../Private/Cart";
import { useAuth } from "../../Utils/Auth";
import DispLang from "../Shared/DispLang";

const CartBox = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { data } = useFetchUserCart(auth.user);
  const { mutateAsync } = useDeleteFromCart();
  return (
    <div className="cursor-pointer cart-box d-flex align-items-center justify-content-between">
      <div className="shape p-2 position-relative">
        <i className="fa-solid fa-bag-shopping fs-3"></i>
        <div className="cart-prod-nums">
          <span>{data?.data.data?.items?.length || "00"}</span>
        </div>
        <div className="cart-items p-3">
          <p className="text-muted">
            <FormattedMessage id="ThereAre" />{" "}
            <span>
              {!data?.data.data ? "0" : data?.data.data.items.length || "0"}{" "}
              <FormattedMessage id="CartItms" />
            </span>{" "}
            <FormattedMessage id="InCart" />
          </p>
          <div className="cart-products">
            {!data?.data.data
              ? null
              : data?.data.data.items.map((item) => (
                  <figure
                    key={item._id}
                    className="border-bottom pb-3 cart-product d-flex align-items-center justify-content-between"
                  >
                    <div className="img-container">
                      <img
                        src={`${process.env.REACT_APP_API_URL}/${item.product.image}`}
                        alt=""
                        width={70}
                        height={70}
                        className="border"
                      />
                    </div>
                    <div className="info text-dark">
                      <div className="title mb-2">
                        <p className="fw-bold">
                          {DispLang
                            ? item.product.title.ar
                            : item.product.title.en}
                        </p>
                      </div>
                      <div className="price mb-3">
                        <span className="fw-bold">{item.price} EGP</span>
                      </div>
                      <div className="quantity text-center">
                        <span className="fw-bold  p-1 pe-2 ps-2 border text-dark">
                          {item.quantity}
                        </span>
                      </div>
                    </div>
                    <div className="edit-delete">
                      <div
                        className="edit text-muted"
                        onClick={() => navigate("/cart/update")}
                      >
                        <i className="fa-solid fa-pen"></i>
                      </div>
                      <div
                        className="delete text-muted"
                        onClick={() => mutateAsync(item)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </div>
                    </div>
                  </figure>
                ))}
          </div>
          <div className="sub-total d-flex align-items-center justify-content-between">
            <h6 className="fw-bold text-uppercase text-dark">
              <FormattedMessage id="SubTotal" />
            </h6>
            <h6 className="fw-bold text-uppercase sub-total-price">
              {!data?.data.data ? "0.00" : data?.data.data.total || "0.00"} EGP
            </h6>
          </div>
          <div className="view-checkout d-flex align-items-center justify-content-between">
            <div className="view mt-3">
              {" "}
              <span
                className="text-dark fw-bold border p-1 text-uppercase pe-2 ps-2"
                onClick={() => navigate("/cart/update")}
              >
                {" "}
                <FormattedMessage id="View" />{" "}
              </span>
            </div>
            <div className="checkout mt-3">
              {" "}
              <span
                className="text-dark fw-bold border p-1 text-uppercase pe-2 ps-2"
                onClick={() => navigate("/CheckOut")}
              >
                <FormattedMessage id="CheckOut" />
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="title">
        <span
          className={`fw-bold ${DispLang ? "me-2" : "ms-2"} text-uppercase`}
        >
          <FormattedMessage id="Cart" /> -{" "}
          <span className="cart-price">
            {!data?.data.data ? "0.00" : data?.data.data.total || "0.00"}{" "}
            {` EGP`}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CartBox;
