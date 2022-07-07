/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */

import { useNavigate } from "react-router-dom";
import { useFetchSettings } from "../../Private/Settings";
import DispLang from "../Shared/DispLang";
import { FormattedMessage } from "react-intl";
import "../../Styles/footer.css";

const Footer = () => {
  const { data } = useFetchSettings();
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-top" dir={`${DispLang ? "rtl" : "ltr"}`}>
        <div className="container-fluid">
          <div className="logo">
            <img
              src={`${process.env.REACT_APP_API_URL}/${data?.data.data.favIcon}`}
              alt=""
              width={200}
              height={36}
            />
          </div>
          <div className="options">
            <ul>
              <li>
                {" "}
                <FormattedMessage id="Companies" />{" "}
              </li>
              <li>
                {" "}
                <FormattedMessage id="Privacy" />{" "}
              </li>
              <li>
                {" "}
                <FormattedMessage id="Instructions" />{" "}
              </li>
              <li>
                {" "}
                <FormattedMessage id="Returns" />{" "}
              </li>
            </ul>
          </div>
          <div className="social">
            <div className="face-parent">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="twitter-parent">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="google-plus-parent">
              <i className="fa-brands fa-google-plus-g"></i>
            </div>
            <div className="pinterest-parent">
              <i className="fa-brands fa-pinterest-p"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-center-parent" dir={`${DispLang ? "rtl" : "ltr"}`}>
        <div className="container-fluid">
          <div className="footer-center">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 mb-2 foot-info">
                <div className="title logo">
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${data?.data.data.logo}`}
                    alt=""
                    width={200}
                    height={36}
                  />
                </div>
                <div className="contact-footer">
                  <ul>
                    <li>
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-location-crosshairs`}
                      ></i>
                      <FormattedMessage id="Address" />
                    </li>
                    <li>
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-phone-flip`}
                      ></i>
                      12345678 - 987654321
                    </li>
                    <li>
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-envelope`}
                      ></i>
                      sata@example.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-2 foot-info ">
                <div className="title">
                  <h5>
                    {" "}
                    <FormattedMessage id="CustomerComfort" />
                  </h5>
                </div>
                <div className="customer-care-footer">
                  <ul>
                    <li>
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-house`}
                      ></i>
                      <FormattedMessage id="Home" />
                    </li>
                    <li>
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-address-card`}
                      ></i>
                      <FormattedMessage id="Who" />
                    </li>
                    <li>
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-chalkboard-user`}
                      ></i>
                      <FormattedMessage id="Instructions" />
                    </li>
                    <li>
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-circle-info`}
                      ></i>
                      <FormattedMessage id="HelpCenter" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-2 foot-info ">
                <div className="title">
                  <h5>
                    {" "}
                    <FormattedMessage id="Categories" />
                  </h5>
                </div>
                <div className="customer-categories-footer">
                  <ul>
                    <li>
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-brands fa-product-hunt`}
                      ></i>
                      <FormattedMessage id="ProductsSupp" />
                    </li>
                    <li>
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-address-card`}
                      ></i>
                      <FormattedMessage id="CustomersSupp" />
                    </li>
                    <li>
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-chalkboard-user`}
                      ></i>
                      <FormattedMessage id="Instructions" />
                    </li>
                    <li>
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-phone-flip`}
                      ></i>
                      <FormattedMessage id="Contact" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-2 foot-info ">
                <div className="title">
                  <h5>
                    {" "}
                    <FormattedMessage id="Contact" />{" "}
                  </h5>
                </div>
                <div className="customer-category-footer">
                  <ul>
                    <li
                      className="cursor-pointer"
                      onClick={() => navigate("/Help")}
                    >
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-circle-info`}
                      ></i>
                      <FormattedMessage id="HelpCenter" />
                    </li>
                    <li
                      className="cursor-pointer"
                      onClick={() => navigate("/Privacy-Policy")}
                    >
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-map-location-dot`}
                      ></i>
                      <FormattedMessage id="PrivacyPolicy" />
                    </li>
                    <li
                      className="cursor-pointer"
                      onClick={() => navigate("/Returned")}
                    >
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-arrows-rotate`}
                      ></i>
                      <FormattedMessage id="ExchangeReturn" />
                    </li>
                    <li
                      className="cursor-pointer"
                      onClick={() => navigate("/Download")}
                    >
                      <i
                        className={`${
                          DispLang ? "ar" : "en"
                        } fa-solid fa-download`}
                      ></i>
                      <FormattedMessage id="SataDownload" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer" dir={`${DispLang ? "rtl" : "ltr"}`}>
        <div className="left mt-3">
          <p>
            &copy;
            <FormattedMessage id="Rights" />
            <a target="_blank" href="https://spctec.com/" rel="noreferrer">
              SPC
            </a>{" "}
          </p>
        </div>
        <div className="right">
          <img
            src="https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/payment.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
