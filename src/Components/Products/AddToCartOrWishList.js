import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useAddToCart } from "../../Private/Cart";
import { useAuth } from "../../Utils/Auth";
import { initialValues, validationSchema } from "./FormikKeys";
import { useCheckProdWishList, useAddToWishList } from "../../Private/WishList";
import DispLang from "../Shared/DispLang";
import TextError from "../Shared/TextError";
import { FormattedMessage } from "react-intl";

const AddToCartOrWishList = ({ data }) => {
  const auth = useAuth();
  const { mutateAsync } = useAddToCart();
  const navigate = useNavigate();
  const { data: usrWishLists } = useCheckProdWishList(auth.user);
  const usrProdWishLists =
    !usrWishLists || !usrWishLists?.data
      ? []
      : usrWishLists?.data.data.map((item) => item.product._id);
  const { mutateAsync: addToWishList } = useAddToWishList(auth.user);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) =>
        mutateAsync({
          ...values,
          product: data?.data.data.product._id,
          price: data?.data.data.product.price,
        })
      }
    >
      {(formik) => (
        <Form>
          <div className="product-size-color mt-4">
            <div className="product-size">
              <Field as="select" name="size">
                <option value="">
                  {" "}
                  {DispLang ? "أختر المقاس المناسب" : "Select Size"}{" "}
                </option>
                {data?.data.data.product.size.map((s, i) => (
                  <option value={s} key={i}>
                    {s}{" "}
                  </option>
                ))}
              </Field>
            </div>
            <ErrorMessage name="size" component={TextError} />
            <div className="product-color mt-4">
              <Field as="select" name="color">
                <option value="">
                  {" "}
                  {DispLang ? "أختر اللون المناسب" : "Select Color"}{" "}
                </option>
                {data?.data.data.product.color.map((c, i) => (
                  <option value={c} key={i}>
                    {c}{" "}
                  </option>
                ))}
              </Field>
            </div>
            <ErrorMessage name="color" component={TextError} />
          </div>
          <div className="product-cart-wishlist mt-3">
            <div className="product-quantity">
              <p className="text-muted">
                {" "}
                <FormattedMessage id="Quantity" />{" "}
              </p>
              <button
                onClick={() =>
                  formik.setFieldValue(
                    "quantity",
                    formik.values.quantity === data?.data.data.product.store
                      ? data?.data.data.product.store
                      : formik.values.quantity + 1
                  )
                }
                type="button"
              >
                +
              </button>
              <Field name="quantity" />
              <button
                onClick={() =>
                  formik.setFieldValue(
                    "quantity",
                    formik.values.quantity === 1
                      ? 1
                      : formik.values.quantity - 1
                  )
                }
                type="button"
              >
                -
              </button>
            </div>
            <ErrorMessage name="quantity" component={TextError} />
            <div
              className="add-cart-wishlist mt-4"
              onClick={() => !auth.user && navigate("/login")}
            >
              <button className="add-prod-cart ms-3 me-1" type="submit">
                <i className="fa-solid fa-cart-plus"></i>
              </button>
              <button
                className="add-prod-wishlist"
                type="button"
                disabled={usrProdWishLists.includes(
                  data?.data.data.product._id
                )}
                style={{
                  cursor: usrProdWishLists.includes(data?.data.data.product._id)
                    ? "not-allowed"
                    : "pointer",
                }}
                onClick={() =>
                  addToWishList({
                    product: data?.data.data.product._id,
                  })
                }
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddToCartOrWishList;
