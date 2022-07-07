import { FormattedMessage } from "react-intl";
import "../../Styles/services.css";

const Service = () => {
  return (
    <div className="container-fluid  mb-5">
      <div className="our-services">
        <div className="free-delivery d-flex align-items-center justify-content-center">
          <div className="img-container">
            <img src="./images/5.png" alt="" />
          </div>
          <div className="title">
            <h5 className="text-uppercase">
              <FormattedMessage id="FreeDelivery" />
            </h5>
            <p className="text-uppercase">
              {" "}
              <FormattedMessage id="FreeDeliveryFrom" />
            </p>
          </div>
        </div>
        <div className="free-support d-flex align-items-center justify-content-center">
          <div className="img-container">
            <img src="./images/4.png" alt="" />
          </div>
          <div className="title">
            <h5 className="text-uppercase">
              <FormattedMessage id="Support" />
            </h5>
            <p className="text-uppercase">
              <FormattedMessage id="SupportOnline" />{" "}
            </p>
          </div>
        </div>
        <div className="free-return d-flex align-items-center justify-content-center">
          <div className="img-container">
            <img src="./images/3.png" alt="" />
          </div>
          <div className="title">
            <h5 className="text-uppercase">
              {" "}
              <FormattedMessage id="FreeReturn" />
            </h5>
            <p className="text-uppercase">
              <FormattedMessage id="FreeReturn365" />{" "}
            </p>
          </div>
        </div>
        <div className="payment-method d-flex align-items-center justify-content-center">
          <div className="img-container">
            <img src="./images/2.png" alt="" />
          </div>
          <div className="title">
            <h5 className="text-uppercase">
              {" "}
              <FormattedMessage id="PaymentMethod" />
            </h5>
            <p className="text-uppercase">
              {" "}
              <FormattedMessage id="PaymentSecure" />
            </p>
          </div>
        </div>
        <div className="big-saving d-flex align-items-center justify-content-center">
          <div className="img-container">
            <img src="./images/1.png" alt="" />
          </div>
          <div className="title">
            <h5 className="text-uppercase">
              {" "}
              <FormattedMessage id="BigSaving" />
            </h5>
            <p className="text-uppercase">
              <FormattedMessage id="WeekenSales" />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
