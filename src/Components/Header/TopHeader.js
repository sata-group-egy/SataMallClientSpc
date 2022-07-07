import { FormattedMessage } from "react-intl";
import DispLang from "../Shared/DispLang";

const TopHeader = () => {
  return (
    <div className="top-header" dir={DispLang ? "rtl" : "ltr"}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="greeting">
          <h6 className="mt-1 fw-bold">
            {" "}
            <FormattedMessage id="Greeting" />{" "}
          </h6>
        </div>
        <div className="languages position-relative">
          <h6 className="mt-1 cursor-pointer">
            {" "}
            <img
              src={`/images/${DispLang ? "ar" : "en"}.png`}
              alt=""
              className="mw-100"
            />{" "}
            <span className="text-muted mt-2">
              {" "}
              <FormattedMessage
                id={`${DispLang ? "Arabic" : "English"}`}
              />{" "}
            </span>{" "}
            <i className="fa-solid fa-chevron-down"></i>
          </h6>
          <ul
            className={`list-unstyled p-0 m-0 cursor-pointer ${
              DispLang ? "ar" : "en"
            }`}
          >
            <li
              className="ms-1"
              onClick={() => {
                localStorage.setItem("language", "en");
                window.location.reload();
              }}
            >
              <img src="/images/en.png" alt="" className="mw-100" />{" "}
              <span className="mt-2">
                <FormattedMessage id="English" />
              </span>{" "}
            </li>
            <li
              className="ms-1 mb-1"
              onClick={() => {
                localStorage.setItem("language", "ar");
                window.location.reload();
              }}
            >
              <img src="/images/ar.png" alt="" className="mw-100" />{" "}
              <span className="mt-2">
                <FormattedMessage id="Arabic" />
              </span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
