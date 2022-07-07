import { Field } from "formik";
import { FormattedMessage } from "react-intl";
import { useFetchCategories } from "../../Private/Category";
import DispLang from "../Shared/DispLang";

const SearchByCategory = () => {
  const { data } = useFetchCategories(false);
  return (
    <div className="search-child p-3 ">
      <div className="border-bottom">
        <div className="search-category">
          <h5>
            {" "}
            <FormattedMessage id="CategorySearch" />{" "}
          </h5>
          <ul className="list-unstyled p-3">
            {data?.data.data.map((cat) => (
              <li className="p-1" key={cat._id}>
                {" "}
                <Field
                  type="radio"
                  name="category"
                  value={DispLang ? cat.title.ar : cat.title.en}
                  className={`${DispLang ? "ms-1" : "me-1"}`}
                  id={cat._id}
                />{" "}
                <label htmlFor={cat._id} className="cursor-pointer">
                  {DispLang ? cat.title.ar : cat.title.en}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchByCategory;
