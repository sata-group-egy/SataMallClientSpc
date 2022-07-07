import { Field } from "formik";
import { useState, useEffect, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { useRanger } from "react-ranger";
const SearchByPrice = ({ formik }) => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(2000);
  const [values, setValues] = useState([value1, value2]);
  useEffect(() => {
    setValues([value1, value2]);
  }, [value1, value2]);
  const { getTrackProps, handles } = useRanger({
    min: 0,
    max: 2000,
    stepSize: 1,
    values,
    onDrag: setValues,
  });
  return (
    <div className="search-child p-3 ">
      <div className="border-bottom">
        <div className="search-price">
          <h5 className="mb-3">
            {" "}
            <FormattedMessage id="PriceSearch" />{" "}
          </h5>
          <p className="mb-3">
            <FormattedMessage id="Between" /> {" ( "} {values[0]} - {values[1]}
            {" ) "} LE
          </p>
          <div
            {...getTrackProps({
              style: {
                height: "4px",
                background: "#ddd",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
                borderRadius: "2px",
                margin: "20px auto",
                cursor: "pointer",
                width: "90%",
              },
            })}
          >
            {handles.map((item, i) => {
              return (
                <Fragment key={i}>
                  <div
                    {...item.getHandleProps({
                      style: {
                        width: "12px",
                        height: "12px",
                        borderRadius: "100%",
                        background:
                          "linear-gradient(to bottom, #eee 45%, #ddd 55%)",
                        border: "solid 1px #888",
                        padding: "5px",
                      },
                    })}
                    key={i}
                  />
                </Fragment>
              );
            })}
            <Field
              value={values[0]}
              name="minPrice"
              type={"hidden"}
              onChange={(e) => setValue1(e.target.value)}
            />
            <Field
              value={values[1]}
              type={"hidden"}
              name="maxPrice"
              onChange={(e) => setValue2(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchByPrice;
