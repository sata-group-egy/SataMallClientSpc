import { Link, useNavigate } from "react-router-dom";
import { useFetchCategories } from "../../Private/Category";
import DispLang from "../Shared/DispLang";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";
import CartBox from "../Cart/CartBox";
import "../../Styles/header.css";
import { Field, Form, Formik } from "formik";

const Header = () => {
  const { data } = useFetchCategories(false);
  const navigate = useNavigate();
  return (
    <>
      <TopHeader />
      <header
        className="container-fluid p-3 "
        dir={`${DispLang ? "rtl" : "ltr"}`}
      >
        <div className="logo-container text-center">
          <Link to={"/"}>
            <img src="/images/Header-Logo.png" alt="" />
          </Link>
        </div>
        <div className="search-container text-center">
          <Formik
            initialValues={{
              title: "",
              category: "",
            }}
            onSubmit={(values) =>
              navigate(
                `/Search/Title/${
                  values.title || "''"
                }/SubCategory/''/Brand/''/MinPrice/''/MaxPrice/''/Category/${
                  values.category || "''"
                }`
              )
            }
          >
            <Form>
              <Field
                as="select"
                className={`border outline-0 ${DispLang ? "ar" : "en"}`}
                name="category"
              >
                <option value="">
                  {DispLang ? "جميع الأقسام " : "All Categories"}{" "}
                </option>
                {data?.data.data.map((cat) => (
                  <option
                    key={cat._id}
                    value={DispLang ? cat.title.ar : cat.title.en}
                  >
                    {DispLang ? cat.title.ar : cat.title.en}
                  </option>
                ))}
              </Field>
              <Field
                className={`outline-0 border border-${
                  DispLang ? "end" : "start"
                }-0`}
                placeholder={`${
                  DispLang ? "أنا أتسوق لأجل" : "Search Items..."
                }`}
                name="title"
              />
              <button
                className={`outline-0 ${DispLang ? "ar" : "en"}`}
                type="submit"
              >
                {" "}
                <i className="fa-solid fa-search"></i>
              </button>
            </Form>
          </Formik>
        </div>
        <div className="usr-options-container">
          <div className="d-flex align-items-center justify-content-center">
            <div
              className={`${DispLang ? "ms-4" : "me-4"} cursor-pointer`}
              onClick={() => navigate("/wishlist/update")}
            >
              <i className="fa-solid fa-heart fs-3"></i>
            </div>
            <CartBox />
          </div>
        </div>
      </header>
      <BottomHeader />
    </>
  );
};

export default Header;
