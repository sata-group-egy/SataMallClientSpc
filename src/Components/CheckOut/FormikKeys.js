import * as Yup from "yup";

export const initialValues = {
  fullname: "",
  phone: "",
  address: "",
  price: "",
  shipping_cost: "",
  paymentType: "",
  country: "",
  city: "",
  region: "",
  orderItems: [],
};

export const validationSchema = Yup.object({
  fullname: Yup.string().required("هذا الحقل مطلوب"),
  phone: Yup.string().required("هذا الحقل مطلوب"),
  address: Yup.string().required("هذا الحقل مطلوب"),
  paymentType: Yup.string().required("هذا الحقل مطلوب"),
  country: Yup.string().required("هذا الحقل مطلوب"),
  city: Yup.string().required("هذا الحقل مطلوب"),
  region: Yup.string().required("هذا الحقل مطلوب"),
});
