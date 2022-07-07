import "../../Styles/bread-crumb.css";
import DispLang from "./DispLang";

const BreadCrumb = ({ dataList }) => {
  return (
    <div className="bread-crumb-container" dir={`${DispLang ? "rtl" : "ltr"}`}>
      <div className="bread-crumb">
        <ul>
          {dataList.map((bread, i) => (
            <li key={i} className={`${DispLang ? "en" : "ar"}`}>
              {bread}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
