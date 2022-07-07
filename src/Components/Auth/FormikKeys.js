import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .required(`هذا الحقل مطلوب`)
    .email("لابد من كتابه البريد بشكل صحيح"),
  password: Yup.string().required(`هذا الحقل مطلوب`),
});

export const userRegInitialValues = {
  fullname: "",
  email: "",
  role: "user",
  telephone: "",
  mobile: "",
  image: "",
  password: "",
  vpassword: "",
};

export const userRegValidationSchema = Yup.object({
  fullname: Yup.string().required("هذا الحقل مطلوب"),
  email: Yup.string()
    .required("هذا الحقل مطلوب")
    .email("لابد من كتابه البريد بشكل صحيح"),
  telephone: Yup.string().required("هذا الحقل مطلوب"),
  mobile: Yup.string().required("هذا الحقل مطلوب"),
  image: Yup.string().required("هذا الحقل مطلوب"),
  password: Yup.string().required("هذا الحقل مطلوب"),
  vpassword: Yup.string()
    .required("هذا الحقل مطلوب")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "هذان الحقلان غير متطابقان"
      ),
    }),
});
