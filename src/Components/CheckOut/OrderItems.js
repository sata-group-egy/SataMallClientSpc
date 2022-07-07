import { FormattedMessage } from "react-intl";
import DispLang from "../Shared/DispLang";

const OrderItems = ({ data }) => {
  return (
    <div className="col-lg-6 col-sm-12 mb-2">
      <div>
        <table className="w-100">
          <thead>
            <tr>
              <th className="border text-center p-3">
                {" "}
                <FormattedMessage id="Image" />{" "}
              </th>
              <th className="border text-center p-3">
                {" "}
                <FormattedMessage id="Name" />{" "}
              </th>
              <th className="border text-center p-3">
                {" "}
                <FormattedMessage id="Price" />{" "}
              </th>
              <th className="border text-center p-3">
                {" "}
                <FormattedMessage id="Qty" />{" "}
              </th>
              <th className="border text-center p-3">
                {" "}
                <FormattedMessage id="Total" />{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data.data.items.map((ordItm) => (
              <tr key={ordItm._id}>
                <td className="border text-center p-3">
                  <div className="img-container">
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${ordItm.product.image}`}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                </td>
                <td className="border text-center text-primary p-3 fw-bold">
                  {DispLang ? ordItm.product.title.ar : ordItm.product.title.en}
                </td>
                <td className="text-orange fw-bold border text-center  p-3">
                  {ordItm.price} LE
                </td>
                <td className="border text-center text-primary p-3 fw-bold">
                  {ordItm.quantity}
                </td>
                <td className="text-orange fw-bold border text-center p-3">
                  {ordItm.quantity * ordItm.price} LE
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="p-3 fw-bold border text-center">
                <FormattedMessage id="Total" />
              </td>
              <td className="fw-bold text-orange text-center p-3 border">
                {data?.data.data.total} LE
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default OrderItems;
