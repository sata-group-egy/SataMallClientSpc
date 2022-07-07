import * as Yup from "yup";

export const initialValues = {
  items: [],
  total: "",
};

export const validationSchema = Yup.object({
  items: Yup.array().required("هذا الحقل مطلوب"),
  total: Yup.string().required("هذا الحقل مطلوب"),
});
