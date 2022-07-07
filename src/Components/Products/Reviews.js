import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useFetchProdComments } from "../../Private/Rate";
import { useAuth } from "../../Utils/Auth";
import DispLang from "../Shared/DispLang";
import AddRate from "./AddRate";

const Reviews = ({ data, id }) => {
  const [currChoice, setCurrChoice] = useState("Reviews");
  const navigate = useNavigate();
  const auth = useAuth();
  const { data: prodRates } = useFetchProdComments(id);
  return (
    <div className="reviews-additional-description mt-5 p-5">
      <div className="reviews-additional-description-header">
        <ul className="list-unstyled">
          <li
            className={`${currChoice === "Reviews" ? "active" : ""}`}
            onClick={() => setCurrChoice("Reviews")}
          >
            <FormattedMessage id="Comments" />
          </li>
          <li
            className={`${currChoice === "Additional" ? "active" : ""}`}
            onClick={() => setCurrChoice("Additional")}
          >
            <FormattedMessage id="AddInfo" />
          </li>
          <li
            className={`${currChoice === "Description" ? "active" : ""}`}
            onClick={() => setCurrChoice("Description")}
          >
            <FormattedMessage id="Desc" />
          </li>
        </ul>
      </div>
      <div className={`reviews ${currChoice !== "Reviews" && "d-none"}`}>
        {prodRates?.data.data.map((rate, i) => (
          <div
            className={`old-comments-rates d-flex ${i > 0 && "mt-2"}`}
            key={rate._id}
          >
            <div className="img-container">
              <img
                src={`${process.env.REACT_APP_API_URL}/${rate.user.image}`}
                alt=""
              />
            </div>
            <div
              className={`comment pe-3  border pb-2 ${
                DispLang ? "me-3" : "ms-3"
              }`}
            >
              <div className="by-whom p-2 d-flex align-items-center justify-content-between">
                <div className="owner">
                  <h6 className="fw-bold">
                    {rate.user.fullname}{" "}
                    <bdi>
                      <span className="me-1 fw-lighter text-muted">
                        {new Date(rate.createdAt).toDateString()}
                      </span>
                    </bdi>
                  </h6>
                </div>
                <div className="owner-rate ms-2">
                  <div className="stars">
                    {[...Array(rate.rate).keys()].map((r) => (
                      <i className="fa-solid fa-star text-orange" key={r}></i>
                    ))}
                  </div>
                </div>
              </div>
              <span className={`${!DispLang && "ms-2"}`}>{rate.comment}</span>
            </div>
          </div>
        ))}

        <div className="ask-login mt-2 p-2">
          {prodRates?.data.data.length === 0 && (
            <h6 className="fw-bold text-center">
              {" "}
              <FormattedMessage id="NoComments" />{" "}
            </h6>
          )}
          {!auth.user && (
            <h6 className="text-center">
              <FormattedMessage id="Must" />{" "}
              <span className="rev-login" onClick={() => navigate("/login")}>
                {" "}
                <FormattedMessage id="Login" />
              </span>{" "}
              <FormattedMessage id="ToAddComment" />
            </h6>
          )}
        </div>
        {auth.user && <AddRate {...{ id, prodRates }} />}
      </div>
      <div className={`p-add-info ${currChoice !== "Additional" && "d-none"}`}>
        <div className="sizes d-flex align-items-center  justify-content-center">
          <div className={`title ${DispLang ? "ms-2" : "me-2"}`}>
            <h5 className="fw-bold mt-1">
              {" "}
              <FormattedMessage id="Sizes" />{" "}
            </h5>
          </div>
          <div className="title">
            {data?.data.data.product.size.map((s, i) => (
              <span key={i}>{s} </span>
            ))}
            <span>{data?.data.data.product.size[-1]}</span>
          </div>
        </div>
        <div className="colors d-flex align-items-center justify-content-center">
          <div className={`title ${DispLang ? "ms-2" : "me-2"}`}>
            <h5 className="fw-bold mt-1">
              {" "}
              <FormattedMessage id="Colors" />{" "}
            </h5>
          </div>
          <div className="title">
            {data?.data.data.product.color.map((c, i) => (
              <span key={i}>{c} </span>
            ))}
            <span>{data?.data.data.product.color[-1]}</span>
          </div>
        </div>
      </div>
      <div className={`p-desc ${currChoice !== "Description" && "d-none"}`}>
        <h6 style={{ lineHeight: "1.6" }} className="text-muted">
          {DispLang
            ? data?.data.data.product.description.ar
            : data?.data.data.product.description.en}
        </h6>
      </div>
    </div>
  );
};

export default Reviews;
