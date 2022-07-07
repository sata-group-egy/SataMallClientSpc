import BreadCrumb from "../Shared/BreadCrumb";
import OrderItems from "./OrderItems";
import Shipping from "./Shipping";
import TextError from "../Shared/TextError";
import DispLang from "../Shared/DispLang";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./FormikKeys";
import { useCreateOrder } from "../../Private/Order";
import { useFetchUserCart } from "../../Private/Cart";
import { useAuth } from "../../Utils/Auth";
import { FormattedMessage } from "react-intl";
import "../../Styles/checkout.css";

const CheckOut = () => {
  const { mutateAsync } = useCreateOrder();
  const auth = useAuth();
  const { data } = useFetchUserCart(auth.user);

  return (
    <>
      <BreadCrumb
        dataList={[
          DispLang ? "الرئيسية" : "Home",
          DispLang ? "الدفع" : "CheckOut",
        ]}
      />
      <div className="container mt-4 mb-4">
        {!data?.data.data ? (
          <h1 className="fw-bold text-center">
            {" "}
            <FormattedMessage id="NothingToShow" />
          </h1>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              mutateAsync(values);
            }}
          >
            {(formik) => {
              return (
                <Form
                  className="checkout-parent"
                  dir={`${DispLang ? "rtl" : "ltr"}`}
                >
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 user-data">
                      <div className="border p-3">
                        <div className="input-container p-2">
                          <Field
                            name="fullname"
                            placeholder={`${
                              DispLang ? "الأسم بالكامل" : "Full Name"
                            }`}
                          />
                          <ErrorMessage name="fullname" component={TextError} />
                        </div>
                        <div className="input-container p-2">
                          <Field
                            name="phone"
                            placeholder={`${
                              DispLang ? "رقم التليفون" : "Phone Number"
                            }`}
                          />
                          <ErrorMessage name="phone" component={TextError} />
                        </div>
                        <div className="input-container p-2">
                          <Field
                            name="address"
                            placeholder={`${DispLang ? "العنوان" : "Address"}`}
                          />
                          <ErrorMessage name="address" component={TextError} />
                        </div>
                        <div className="input-container p-2">
                          <Field as="select" name="paymentType">
                            <option value="">
                              {" "}
                              <FormattedMessage id="ChoosePaymentType" />{" "}
                            </option>
                            <option value="money">
                              {" "}
                              <FormattedMessage id="Cash" />{" "}
                            </option>
                            <option value="bocket">
                              {" "}
                              <FormattedMessage id="BocketMoney" />{" "}
                            </option>
                          </Field>
                          <ErrorMessage
                            name="paymentType"
                            component={TextError}
                          />
                        </div>
                        <Shipping {...{ formik }} />
                        <div className="input-container w-100 text-center mt-2">
                          <button
                            type="submit"
                            onClick={() => {
                              formik.setFieldValue(
                                "price",
                                data?.data.data.total
                              );
                              formik.setFieldValue(
                                "orderItems",
                                data?.data.data.items.map((item) => {
                                  return {
                                    product: item.product._id,
                                    quantity: item.quantity,
                                    customer: auth.user._id,
                                    size: [item.size],
                                    color: [item.color],
                                  };
                                })
                              );
                            }}
                          >
                            <FormattedMessage id="SaveChanges" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <OrderItems {...{ data }} />
                  </div>
                </Form>
              );
            }}
          </Formik>
        )}
      </div>
    </>
  );
};

export default CheckOut;
