import { useLocation, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { login } from "../../Redux/Auth/AuthActions";
import request from "../../Utils/api-utils";
import { useDispatch } from "react-redux";
import { useAuth } from "../../Utils/Auth";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { initialValues, validationSchema } from "./FormikKeys";
import { FormattedMessage } from "react-intl";
import TextError from "../Shared/TextError";
import DispLang from "../Shared/DispLang";
import "../../Styles/auth.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useAuth();
  const location = useLocation();
  return ReactDOM.createPortal(
    <div className="auth-parent" dir={DispLang ? "rtl" : "ltr"}>
      <div className="login-parent">
        <div className="close-btn">
          <i className="fa-solid fa-xmark" onClick={() => navigate(-1)}></i>
        </div>
        <h5>
          {" "}
          <FormattedMessage id="Login" />{" "}
        </h5>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values, onSubmitProps) => {
            return dispatch(async () => {
              try {
                const user = await request.post("/auth/login", values);
                dispatch(login(user.data));
                auth.login(user.data.payload);
                navigate(location.state?.path || "/", {
                  replace: true,
                });
              } catch (error) {
                onSubmitProps.setErrors({
                  email: DispLang
                    ? "كلمة السر او البريد الإلكترونى غير صحيح"
                    : "Invalid Email Or Password",
                  password: DispLang
                    ? "كلمة السر او البريد الإلكترونى غير صحيح"
                    : "Invalid Email Or Password",
                });
              }
            });
          }}
        >
          {(formik) => (
            <Form className="login-form">
              <div className="email-parent">
                <Field
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={DispLang ? "البريد الإلكترونى" : "Email"}
                />

                <div>
                  <ErrorMessage name="email" component={TextError} />
                </div>
              </div>
              <div className="password-parent">
                <Field
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={DispLang ? "كلمة السر" : "Password"}
                />

                <div>
                  <ErrorMessage name="password" component={TextError} />
                </div>
              </div>
              <div className="submit-parent">
                <button className="submit-btn" type="submit">
                  <FormattedMessage id="Login" />
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="ask-register mt-2">
          <button
            className="ask-register-btn"
            onClick={() => navigate("/register")}
          >
            <FormattedMessage id="SignUp" />
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("login-register")
  );
};

export default Login;
