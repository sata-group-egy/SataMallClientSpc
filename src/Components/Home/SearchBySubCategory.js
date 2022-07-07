import { Field } from "formik";
import { FormattedMessage } from "react-intl";
import { useFetchSubCategories } from "../../Private/Category";
import DispLang from "../Shared/DispLang";

const SearchBySubCategory = () => {
  const { data } = useFetchSubCategories();
  return (
    <div className="search-child p-3 ">
      <div className="border-bottom">
        <div className="search-category">
          <h5>
            {" "}
            <FormattedMessage id="SubCategorySearch" />{" "}
          </h5>
          <ul className="list-unstyled p-3">
            {data?.data.data.map((sub) => (
              <li className="p-1" key={sub._id}>
                <Field
                  type="radio"
                  name="subCategory"
                  value={DispLang ? sub.title.ar : sub.title.en}
                  className={`${DispLang ? "ms-1" : "me-1"}`}
                  id={sub._id}
                />
                <label htmlFor={sub._id} className="cursor-pointer">
                  {DispLang ? sub.title.ar : sub.title.en}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBySubCategory;
