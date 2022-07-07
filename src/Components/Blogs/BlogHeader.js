import { FormattedMessage } from "react-intl";
import DispLang from "../Shared/DispLang";
import "../../Styles/products.css";

const BlogHeader = ({ next, prev }) => {
  return (
    <div className="prod-header-title" dir={`${DispLang ? "rtl" : "ltr"}`}>
      <div className="title">
        <ul>
          <li className={`active ${DispLang ? "ar" : "en"}`}>
            <FormattedMessage id="Blogs" />
          </li>
        </ul>
      </div>
      <div className="arrows">
        {!DispLang ? (
          <>
            <span className="arrow-left" onClick={() => prev.current.click()}>
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <span
              className="arrow-right ms-2"
              onClick={() => next.current.click()}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </>
        ) : (
          <>
            <span
              className="arrow-right ms-2"
              onClick={() => next.current.click()}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </span>
            <span className="arrow-left" onClick={() => prev.current.click()}>
              <i className="fa-solid fa-chevron-left"></i>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogHeader;
