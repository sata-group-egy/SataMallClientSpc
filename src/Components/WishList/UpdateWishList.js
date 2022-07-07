import BreadCrumb from "../Shared/BreadCrumb";
import {
  useCheckProdWishList,
  useDeleteFromWishList,
} from "../../Private/WishList";
import { useAuth } from "../../Utils/Auth";
import { useCheckProdCart, useAddToCart } from "../../Private/Cart";
import DispLang from "../Shared/DispLang";
import { FormattedMessage } from "react-intl";
import "../../Styles/cart-update.css";

const UpdateWishList = () => {
  const auth = useAuth();
  const { data } = useCheckProdWishList(auth.user);
  const { data: prodCarts } = useCheckProdCart(auth.user);
  const { mutateAsync } = useDeleteFromWishList();
  const { mutateAsync: addToCart } = useAddToCart(auth.user);
  const usrProdCartIndexes =
    !prodCarts?.data || !prodCarts?.data.data
      ? []
      : prodCarts?.data.data.items.map((item) => item.product);
  return (
    <>
      <BreadCrumb
        dataList={[
          DispLang ? "الرئيسية" : "Home",
          DispLang ? " المنتجات المفضلة" : "Wish List",
        ]}
      />
      <div className="container mt-4 mb-4">
        {!data?.data.data || !prodCarts?.data.data ? (
          <h1 className="fw-bold text-center">
            {" "}
            <FormattedMessage id="NothingToShow" />
          </h1>
        ) : (
          <table className="update-cart-parent">
            <thead>
              <tr>
                <th>
                  {" "}
                  <FormattedMessage id="Image" />{" "}
                </th>
                <th>
                  {" "}
                  <FormattedMessage id="Name" />{" "}
                </th>
                <th>
                  {" "}
                  <FormattedMessage id="Price" />{" "}
                </th>
                <th>
                  {" "}
                  <FormattedMessage id="AddToCart" />{" "}
                </th>
                <th>
                  {" "}
                  <FormattedMessage id="Delete" />{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data.data.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_API_URL}/${item.product.image}`}
                        alt=""
                        width={90}
                        height={90}
                      />
                    </td>
                    <td>
                      <h5 className="text-primary fw-bold">
                        {DispLang
                          ? item.product.title.ar
                          : item.product.title.en}
                      </h5>
                    </td>
                    <td>
                      <h5 className="table-price">{item.product.price} LE</h5>
                    </td>

                    <td>
                      <button
                        className="text-primary"
                        type="submit"
                        onClick={() => {
                          addToCart({
                            product: item.product._id,
                            price: item.product.price,
                          });
                        }}
                        disabled={usrProdCartIndexes.includes(item.product._id)}
                        style={{
                          cursor: usrProdCartIndexes.includes(item.product._id)
                            ? "not-allowed"
                            : "pointer",
                          opacity: usrProdCartIndexes.includes(item.product._id)
                            ? "0.6"
                            : "1",
                        }}
                      >
                        <i className="fa-solid fa-cart-plus"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="text-danger"
                        type="submit"
                        onClick={() => mutateAsync({ _id: item._id })}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default UpdateWishList;
