import { useNavigate } from "react-router-dom";
import { useAddToCart, useCheckProdCart } from "../../Private/Cart";
import { useAddToWishList, useCheckProdWishList } from "../../Private/WishList";
import { useAuth } from "../../Utils/Auth";
const CartWishListView = ({ prod }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { mutateAsync: addToCart } = useAddToCart();
  const { mutateAsync: addToWishList } = useAddToWishList();
  const { data } = useCheckProdCart(auth.user);
  const { data: usrWishLists } = useCheckProdWishList(auth.user);
  // انا هنا عملت كده عشان ممكن اليوزر يكون
  // لسه داخل جديد فاصلا معندوش عربه تسوق او قائمه بالمنتجات المفضله
  const prodCartIndexes =
    !data || !data?.data || !data?.data.data
      ? []
      : data?.data.data.items.map((item) => item.product);
  const prodWishListIndexes =
    !usrWishLists || !usrWishLists?.data || !usrWishLists?.data.data
      ? []
      : usrWishLists?.data.data.map((w) => w.product._id);
  return (
    <div className="prod-usr-option ar">
      {/*Replace en with ar in another lang */}
      <div
        className={`add-cart p-1 ${
          prodCartIndexes.includes(prod._id) && "d-none"
        }`}
        title="أضف لعربة التسوق"
        onClick={() =>
          !auth.user
            ? navigate("/login")
            : addToCart({
                product: prod._id,
                price: prod.price,
              })
        }
      >
        <i className="fa-solid fa-cart-arrow-down"></i>
      </div>
      <div
        className={`add-wishlist p-1 ${
          prodWishListIndexes.includes(prod._id) && "d-none"
        }`}
        title="أضف للمفضلة"
        onClick={() =>
          !auth.user ? navigate("/login") : addToWishList({ product: prod._id })
        }
      >
        <i className="fa-solid fa-heart"></i>
      </div>
      <div
        className="quick-view p-1"
        title="تفاصيل المنتج"
        onClick={() => navigate(`/product/${prod._id}`)}
      >
        <i className="fa-solid fa-eye"></i>
      </div>
    </div>
  );
};

export default CartWishListView;
