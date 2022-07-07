import { Field } from "formik";
import { FormattedMessage } from "react-intl";
import { useFetchBrands } from "../../Private/Brands";
import DispLang from "../Shared/DispLang";

const SearchByBrands = () => {
  const { data } = useFetchBrands(false);
  return (
    <div className="search-child p-3 ">
      <div className="border-bottom">
        <div className="search-category">
          <h5>
            {" "}
            <FormattedMessage id="BrandSearch" />
          </h5>
          <ul className="list-unstyled p-3">
            {data?.data.map((brand) => (
              <li className="p-1" key={brand._id}>
                <Field
                  type="radio"
                  name="brand"
                  value={brand.title.ar}
                  className={`${DispLang ? "ms-1" : "me-1"}`}
                  id={brand._id}
                />
                <label htmlFor={brand._id} className="cursor-pointer">
                  {DispLang ? brand.title.ar : brand.title.en}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchByBrands;
