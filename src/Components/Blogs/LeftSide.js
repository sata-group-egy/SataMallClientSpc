import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useFetchLatest } from "../../Private/Products";
import DispLang from "../Shared/DispLang";

const LeftSide = () => {
  const { data } = useFetchLatest();
  const navigate = useNavigate();
  return (
    <div className="left col-lg-3 order-lg-3 order-md-2 order-sm-2 order-xs-2">
      <div className="left-child border">
        <div className="title p-3" style={{ backgroundColor: "#ebebeb" }}>
          <h5 className="fw-bold">
            {" "}
            <FormattedMessage id="LatestProducts" />{" "}
          </h5>
        </div>
        <div className="products mb-3">
          {data?.data.data.map((prod) => (
            <div
              className="product d-flex align-items-center justify-content-between p-1 mb-1 border-top cursor-pointer"
              key={prod._id}
              onClick={() => navigate(`/product/${prod._id}`)}
            >
              <div className="prod-title">
                <h5 className="fw-bold">
                  {DispLang ? prod.title.ar : prod.title.en}
                </h5>
                <h5 className="text-orange fw-bold me-3">{prod.price} LE</h5>
              </div>
              <div className="img-container">
                <img
                  src={`${process.env.REACT_APP_API_URL}/${prod.image}`}
                  alt=""
                  height={80}
                  width={80}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
