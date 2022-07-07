import SearchByBrands from "./SearchByBrands";
import SearchByCategory from "./SearchByCategory";
import SearchByPrice from "./SearchByPrice";
import SearchBySubCategory from "./SearchBySubCategory";
import { Formik, Form, Field } from "formik";
import { initialValues } from "./FormikKeys";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import DispLang from "../Shared/DispLang";
const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="col-3">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          navigate(
            `/Search/Title/${values.title || "''"}/SubCategory/${
              values.subCategory || "''"
            }/Brand/${values.brand || "''"}/MinPrice/${
              values.minPrice || "''"
            }/MaxPrice/${values.maxPrice || "''"}/Category/${
              values.category || "''"
            }`
          );
        }}
      >
        {(formik) => (
          <Form>
            <div className="search-parent border">
              <div className="title p-2">
                <h5 className="fw-bold">
                  {" "}
                  <FormattedMessage id="SearchTitle" />{" "}
                </h5>
              </div>
              <div className="search-child p-3 ">
                <div className="border-bottom">
                  <div className="search-input mb-3 ">
                    <Field
                      type="search"
                      placeholder={`${
                        DispLang ? "إبحث بإسم المنتج" : "Enter Product Name"
                      }`}
                      name="title"
                    />
                  </div>
                </div>
              </div>
              <SearchByCategory />
              <SearchBySubCategory />
              <SearchByBrands />
              <SearchByPrice {...{ formik }} />
              <div className="search-child p-3 ">
                <div className="submit-reset-search d-flex align-items-center justify-content-center">
                  <div
                    className={`sumbit-parent ${DispLang ? "ms-2" : "me-2"}`}
                  >
                    <button type="submit">
                      {" "}
                      <i className="fa-solid fa-filter"></i>{" "}
                      <FormattedMessage id="Search" />
                    </button>
                  </div>
                  <div className="reset-parent">
                    <button type="button">
                      {" "}
                      <i className="fa-solid fa-ban"></i>{" "}
                      <FormattedMessage id="Cancel" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SideBar;
