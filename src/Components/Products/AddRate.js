import { rateInitialValue, rateValidationSchema } from "./FormikKeys";
import { Form, Formik, Field } from "formik";
import { useState } from "react";
import { useAuth } from "../../Utils/Auth";
import { useAddRate } from "../../Private/Rate";
import { FormattedMessage } from "react-intl";
import DispLang from "../Shared/DispLang";

const AddRate = ({ id, prodRates }) => {
  const [current, setCurrent] = useState(0);
  const auth = useAuth();
  const [isRated, setIsRated] = useState(
    prodRates?.data.data.map((rate) => rate.user._id).includes(auth.user._id)
  );
  const { mutateAsync } = useAddRate();
  return (
    <Formik
      initialValues={rateInitialValue}
      validationSchema={rateValidationSchema}
      onSubmit={(values) => {
        mutateAsync(values);
        setIsRated(true);
      }}
    >
      {(formik) => {
        return (
          <Form>
            <div
              className={`usr-add-rate mt-3 mb-2 p-3 border ${
                isRated && "d-none"
              }`}
            >
              <h6>
                {" "}
                <FormattedMessage id="AddComment" />{" "}
              </h6>
              <div className="stars mb-3">
                <bdi>
                  {[...Array(5).keys()].map((r) => (
                    <i
                      key={r}
                      className={`fa-solid fa-star ${
                        current > 0 && current <= r + 1 && "active"
                      }`}
                      onClick={() => {
                        setCurrent(r + 1);
                        formik.setFieldValue("rate", r + 1);
                      }}
                    ></i>
                  ))}
                </bdi>
              </div>
              <div className="usr-add-comment">
                <Field
                  as="textarea"
                  cols="80"
                  rows="3"
                  className="border"
                  name="comment"
                  placeholder={`${
                    DispLang
                      ? "يتم مراجعة التعليقات بواسطة الأدمن ثم يتم عرضها فى الموقع"
                      : "Comments are accepted by admin then displayed "
                  }`}
                ></Field>
              </div>
              <div className="submit-rate mt-2">
                <button onClick={() => formik.setFieldValue("product", id)}>
                  <FormattedMessage id="SaveChanges" />
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddRate;
