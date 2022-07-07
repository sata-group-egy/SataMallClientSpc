import BreadCrumb from "../Shared/BreadCrumb";
import {
  useFetchUserCart,
  useUpdateCart,
  useDeleteFromCart,
} from "../../Private/Cart";
import { useAuth } from "../../Utils/Auth";
import { initialValues, validationSchema } from "./FormikKeys";
import { Form, Formik, Field } from "formik";
import DispLang from "../Shared/DispLang";
import { FormattedMessage } from "react-intl";
import "../../Styles/cart-update.css";

const Update = () => {
  const auth = useAuth();
  const { data, isLoading } = useFetchUserCart(auth.user);
  const { mutateAsync } = useUpdateCart();
  const { mutateAsync: deleteFromCart } = useDeleteFromCart();
  if (isLoading) {
    return <></>;
  } else {
    const oldData = {
      items: !data?.data.data ? "" : data?.data.data.items,
      total: !data?.data.data ? "" : data?.data.data.total,
    };
    return (
      <>
        <BreadCrumb
          dataList={[
            DispLang ? "الرئيسية" : "Home",
            DispLang ? "عربة التسوق" : "Cart",
          ]}
        />
        <div
          className="container mt-4 mb-4"
          dir={`${DispLang ? "rtl" : "ltr"}`}
        >
          {!data?.data.data ? (
            <h1 className="text-center fw-bold">
              {" "}
              <FormattedMessage id="NothingToShow" />
            </h1>
          ) : (
            <Formik
              initialValues={oldData || initialValues}
              validationSchema={validationSchema}
              enableReinitialize
              onSubmit={(values) => mutateAsync(values)}
            >
              {(formik) => {
                let noClick =
                  !formik.isValid || formik.isSubmitting || !formik.dirty;

                return (
                  <Form>
                    <table className="update-cart-parent">
                      <thead>
                        <tr>
                          <th>
                            {" "}
                            <FormattedMessage id="Image" />{" "}
                          </th>
                          <th>
                            {" "}
                            <FormattedMessage id="Name" />
                          </th>
                          <th>
                            {" "}
                            <FormattedMessage id="Price" />{" "}
                          </th>
                          <th>
                            {" "}
                            <FormattedMessage id="Quantity" />{" "}
                          </th>
                          <th>
                            {" "}
                            <FormattedMessage id="Edit" />{" "}
                          </th>
                          <th>
                            {" "}
                            <FormattedMessage id="Delete" />{" "}
                          </th>
                          <th>
                            {" "}
                            <FormattedMessage id="Total" />{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {!data?.data.data
                          ? null
                          : data?.data.data.items.map((item, i) => (
                              <tr key={item._id}>
                                <td>
                                  <img
                                    src={`${process.env.REACT_APP_API_URL}/${item.product.image}`}
                                    alt=""
                                  />
                                </td>
                                <td>
                                  <h5>
                                    {DispLang
                                      ? item.product.title.ar
                                      : item.product.title.en}
                                  </h5>
                                </td>
                                <td>
                                  <h5 className="table-price">
                                    {item.price} LE
                                  </h5>
                                </td>
                                <td>
                                  <div className="qty-parent">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        formik.setFieldValue(
                                          `items[${i}][quantity]`,
                                          formik.values.items[i].quantity + 1
                                        )
                                      }
                                    >
                                      +
                                    </button>
                                    <Field
                                      type="number"
                                      min="1"
                                      name={`items[${i}][quantity]`}
                                    />
                                    <button
                                      type="button"
                                      onClick={() =>
                                        formik.values.items[i].quantity - 1 ===
                                        0
                                          ? 1
                                          : formik.setFieldValue(
                                              `items[${i}][quantity]`,
                                              formik.values.items[i].quantity -
                                                1
                                            )
                                      }
                                    >
                                      -
                                    </button>
                                  </div>
                                </td>
                                <td>
                                  <button
                                    className="text-primary"
                                    type="submit"
                                    disabled={noClick}
                                    style={{
                                      opacity: noClick ? 0.5 : 1,
                                      cursor: noClick
                                        ? "not-allowed"
                                        : "pointer",
                                    }}
                                  >
                                    <i className="fa-solid fa-pen-to-square"></i>
                                  </button>
                                </td>
                                <td>
                                  <button
                                    className="text-danger"
                                    type="button"
                                    onClick={() => deleteFromCart(item)}
                                  >
                                    <i className="fa-solid fa-trash"></i>
                                  </button>
                                </td>
                                <td>
                                  <h5 className="table-price">
                                    {item.price *
                                      formik.values.items[i].quantity}{" "}
                                    LE
                                  </h5>
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </table>
                  </Form>
                );
              }}
            </Formik>
          )}
        </div>
      </>
    );
  }
};

export default Update;
