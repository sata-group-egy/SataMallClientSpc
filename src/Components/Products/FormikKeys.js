import * as Yup from "yup";

export const initialValues = {
  quantity: 1,
  size: "",
  color: "",
};

export const validationSchema = Yup.object({
  quantity: Yup.number()
    .required("هذا الحقل مطلوب")
    .min(1, "الرقم يجب ان لا يكون أضغر من 1"),
  size: Yup.string().required("هذا الحقل مطلوب"),
  color: Yup.string().required("هذا الحقل مطلوب"),
});

export const rateInitialValue = {
  product: "",
  rate: "",
  comment: "",
};

export const rateValidationSchema = Yup.object({
  product: Yup.string().required("هذا الحقل مطلوب"),
  rate: Yup.string().required("هذا الحقل مطلوب"),
  comment: Yup.string().required("هذا الحقل مطلوب"),
});
