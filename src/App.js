import Header from "./Components/Header/Header";
import Scrolling from "./Components/Shared/Scrolling";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Detail from "./Components/Products/Detail";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Update from "./Components/Cart/Update";
import RequireAuth from "./Utils/RequireAuth";
import UpdateWishList from "./Components/WishList/UpdateWishList";
import BlogDetail from "./Components/Blogs/BlogDetail";
import CheckOut from "./Components/CheckOut/CheckOut";
import Download from "./Components/Footer/Download";
import Privacy from "./Components/Footer/Privacy";
import Help from "./Components/Footer/Help";
import Returned from "./Components/Footer/Returned";
import Search from "./Components/Home/Search";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "./Utils/Auth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Search/Title/:title/SubCategory/:SubCategory/Brand/:Brand/MinPrice/:MinPrice/MaxPrice/:MaxPrice/Category/:Category"
            element={<Search />}
          />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/cart/update"
            element={
              <RequireAuth>
                <Update />
              </RequireAuth>
            }
          />
          <Route
            path="/CheckOut"
            element={
              <RequireAuth>
                <CheckOut />
              </RequireAuth>
            }
          />
          <Route
            path="/wishlist/update"
            element={
              <RequireAuth>
                <UpdateWishList />
              </RequireAuth>
            }
          />
          <Route path="/Download" element={<Download />} />
          <Route path="/Privacy-Policy" element={<Privacy />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Returned" element={<Returned />} />
        </Routes>
        <Scrolling />
        <Footer />
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
    </QueryClientProvider>
  );
}

export default App;
