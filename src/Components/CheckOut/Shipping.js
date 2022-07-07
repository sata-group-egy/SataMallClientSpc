import { useState } from "react";
import {
  useFetchByCntId,
  useFetchCountries,
  useFetchRegion,
} from "../../Private/Shipping";
import { Field, ErrorMessage } from "formik";
import TextError from "../Shared/TextError";
import { FormattedMessage } from "react-intl";
import DispLang from "../Shared/DispLang";
const Shipping = ({ formik }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const { data: countries } = useFetchCountries();
  const { data: cities } = useFetchByCntId(country);
  const { data: regions } = useFetchRegion(city);
  return (
    <>
      <div className="input-container p-2">
        <Field
          as="select"
          name="country"
          onChange={(e) => {
            setCountry(e.target.value);
            formik.setFieldValue("country", e.target.value);
          }}
        >
          <option value="">
            {" "}
            <FormattedMessage id="ChooseCountryName" />{" "}
          </option>
          {countries?.data.data.map((country) => (
            <option value={country._id} key={country._id}>
              {DispLang ? country.country.ar : country.country.en}
            </option>
          ))}
        </Field>
        <ErrorMessage name="country" component={TextError} />
      </div>
      <div className="input-container p-2">
        <Field
          as="select"
          name="city"
          onChange={(e) => {
            formik.setFieldValue("city", e.target.value);
            setCity(e.target.value);
          }}
        >
          <option value="">
            {" "}
            <FormattedMessage id="ChooseCityName" />{" "}
          </option>
          {cities?.data.data.map((city) => (
            <option value={city._id} key={city._id}>
              {DispLang ? city.city.ar : city.city.en}
            </option>
          ))}
        </Field>
        <ErrorMessage name="city" component={TextError} />
      </div>
      <div className="input-container p-2">
        <Field
          as="select"
          name="region"
          onChange={(e) => {
            formik.setFieldValue("shipping_cost", e.target.value);
            formik.setFieldValue("region", e.target.value);
          }}
        >
          <option value="">
            {" "}
            <FormattedMessage id="ChooseRegionName" />{" "}
          </option>
          {regions?.data.map((region) => (
            <option value={region.price} key={region._id}>
              {DispLang ? region.region.ar : region.region.en}
            </option>
          ))}
        </Field>
        <ErrorMessage name="region" component={TextError} />
      </div>
    </>
  );
};

export default Shipping;
