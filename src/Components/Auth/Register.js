import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { userRegInitialValues, userRegValidationSchema } from "./FormikKeys";
import { useRegister } from "../../Private/User";
import { FormattedMessage } from "react-intl";
import ReactDOM from "react-dom";
import TextError from "../Shared/TextError";
import DispLang from "../Shared/DispLang";
import "../../Styles/auth.css";
const Register = () => {
  const navigate = useNavigate();
  const imgRef = useRef(null);
  const { mutateAsync } = useRegister();
  const [userProfile, setUserProfile] = useState("/images/avatar.svg");
  const handleImage = (e, formik) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserProfile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    formik.setFieldValue("image", e.target.files[0]);
  };
  return ReactDOM.createPortal(
    <div className="auth-parent">
      <div className="login-parent">
        <div className="close-btn">
          <i className="fa-solid fa-xmark" onClick={() => navigate(-1)}></i>
        </div>
        <h5>
          {" "}
          <FormattedMessage id="SignUpAsNew" />{" "}
        </h5>
        <Formik
          initialValues={userRegInitialValues}
          validationSchema={userRegValidationSchema}
          onSubmit={(values) => {
            mutateAsync(values);
            navigate("/login");
          }}
        >
          {(formik) => (
            <Form className="login-form">
              <div className="img-parent">
                <div className="img-container">
                  <img
                    src="/images/camera-solid.svg"
                    alt=""
                    width={15}
                    height={15}
                    className={`${DispLang ? "ar" : "en"} camera-icon`}
                    onClick={() => imgRef.current.click()}
                  />
                  <img src={userProfile} alt="" className="user-img" />
                </div>
                <input
                  type="file"
                  name="image"
                  className="d-none"
                  ref={imgRef}
                  onChange={(e) => handleImage(e, formik)}
                />
                <ErrorMessage name="image" component={TextError} />
              </div>
              <div className="fullname-parent">
                <Field
                  type="text"
                  name="fullname"
                  placeholder={DispLang ? "الإسم بالكامل" : "Full Name"}
                />
                <ErrorMessage name="fullname" component={TextError} />
              </div>
              <div className="email-parent">
                <Field
                  type="email"
                  name="email"
                  placeholder={DispLang ? "البريد الإلكترونى" : "Email"}
                />
                <ErrorMessage name="email" component={TextError} />
              </div>
              <div className="mobile-parent">
                <Field
                  type="text"
                  name="mobile"
                  placeholder={DispLang ? "رقم الموبايل" : "Mobile Number"}
                />
                <ErrorMessage name="mobile" component={TextError} />
              </div>
              <div className="telephone-parent">
                <Field
                  type="text"
                  name="telephone"
                  placeholder={DispLang ? "التليفون الإضافى" : "Telephone"}
                />
                <ErrorMessage name="telephone" component={TextError} />
              </div>
              <div className="password-parent">
                <Field
                  type="password"
                  name="password"
                  placeholder={DispLang ? "كلمة المرور" : "Password"}
                />
                <ErrorMessage name="password" component={TextError} />
              </div>
              <div className="v-password-parent">
                <Field
                  type="password"
                  name="vpassword"
                  placeholder={
                    DispLang ? "تأكيد كلمة المرور" : "Verify Password"
                  }
                />
                <ErrorMessage name="vpassword" component={TextError} />
              </div>
              <div className="submit-parent">
                <button className="submit-btn" type="submit">
                  <FormattedMessage id="SignUp" />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>,
    document.getElementById("login-register")
  );
};

export default Register;
