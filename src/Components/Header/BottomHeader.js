import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useFetchCategories } from "../../Private/Category";
import { useAuth } from "../../Utils/Auth";
import DispLang from "../Shared/DispLang";

const BottomHeader = () => {
  const { data } = useFetchCategories(false);
  const navigate = useNavigate();
  const auth = useAuth();
  return (
    <div className="bottom-header" dir={`${DispLang ? "rtl" : "ltr"}`}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="categories cursor-pointer position-relative">
          <i
            className={`fa-solid fa-list ${DispLang ? "ms-2" : "me-2"} fw-bold`}
          ></i>
          <span className={`fw-bold ${DispLang ? "ms-2" : "me-2"}`}>
            <FormattedMessage id="AllCategories" />
          </span>
          <i className="fa-solid fa-chevron-down"></i>
          <div className={`categories-drop-down ${DispLang ? "ar" : "en"}`}>
            <ul className="list-unstyled m-0 p-0">
              {data?.data.data.map((cat, i) => (
                <li
                  key={cat._id}
                  className={`${
                    DispLang ? "ar" : "en"
                  } d-flex align-items-center justify-content-between pb-2 ${
                    i === 0 && "pt-2"
                  }`}
                >
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${cat.image}`}
                    alt=""
                    className={`${DispLang ? "me-2" : "ms-2"}`}
                    height={25}
                    width={20}
                  />
                  <span>{DispLang ? cat.title.ar : cat.title.en}</span>
                  <i
                    className={`fa-solid ${
                      DispLang
                        ? "me-3 fa-chevron-left ms-2"
                        : "ms-3 fa-chevron-right me-2"
                    } ${cat.subCategories.length === 0 && "invisible"}`}
                  ></i>
                  <div
                    className={`sub-category-drop-down ${
                      DispLang ? "ar" : "en"
                    }`}
                  >
                    <ul className="list-unstyled m-0 p-0">
                      {cat.subCategories.map((sub) => (
                        <li
                          key={sub._id}
                          className={`${
                            DispLang ? "ar" : "en"
                          } d-flex align-items-center justify-content-between pb-2 pt-2`}
                        >
                          <img
                            src={`${process.env.REACT_APP_API_URL}/${sub.image}`}
                            alt=""
                            className={`${DispLang ? "me-2" : "ms-2"}`}
                            height={25}
                            width={20}
                          />
                          <span>{DispLang ? sub.title.ar : sub.title.en}</span>
                          <i
                            className={`invisible fa-solid  ${
                              DispLang
                                ? "me-3 fa-chevron-left ms-2"
                                : "ms-3 fa-chevron-right me-2"
                            }`}
                          ></i>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="user-auth d-flex align-items-center justify-content-between">
          {!auth.user ? (
            <div
              className={`login-register d-flex align-items-center justify-content-between ${
                DispLang ? "ms-3" : "me-3"
              }`}
            >
              <i
                className={`fa-solid fa-lock ${DispLang ? "ms-1" : "me-1"}`}
              ></i>
              <p className="text-muted mt-3">
                <span
                  className="cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  <FormattedMessage id="Login" />{" "}
                </span>{" "}
                <FormattedMessage id="Or" />{" "}
                <span
                  className="cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  {" "}
                  <FormattedMessage id="SignUp" />{" "}
                </span>
              </p>
            </div>
          ) : (
            <div
              className={`user-info d-flex align-items-center justify-content-between ${
                DispLang ? "ms-3" : "me-3"
              }`}
            >
              <i
                className={`fa-solid fa-user ${DispLang ? "ms-1" : "me-1"}`}
              ></i>
              <p className="text-muted mt-3">
                <span className="cursor-pointer"> {auth.user.fullname}</span>{" "}
                <span
                  className={`cursor-pointer ${DispLang ? "me-2" : "ms-2"}`}
                  onClick={() => auth.logout()}
                >
                  <i
                    className={`fa-solid fa-right-from-bracket ${
                      DispLang ? "ms-1" : "me-1"
                    } text-dark`}
                  ></i>{" "}
                  <FormattedMessage id="LogOut" />
                </span>
              </p>
            </div>
          )}

          <div className="hot-line">
            <i
              className={`fa-solid ${
                DispLang ? "fa-square-phone-flip" : "fa-square-phone"
              } ${DispLang ? "ms-1" : "me-1"}`}
            ></i>
            <p className="text-muted mt-3">
              {" "}
              <FormattedMessage id="HotLine" /> <bdi>(+123 456 789)</bdi>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
