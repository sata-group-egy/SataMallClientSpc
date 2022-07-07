import React from "react";
import Service from "../Service/Service";
import ShopByCategory from "../Shop/ShopByCategory";
import BestSellerDeals from "../BestSeller/BestSellerDeals";
import Banner from "../Banners/Banner";
import SaleBanner from "../Banners/SaleBanner";
import ProdHeader from "../Products/ProdHeader";
import TrendHeader from "../Products/TrendHeader";
import Brands from "../Brands/Brands";
import Blogs from "../Blogs/Blogs";
import HomeSlider from "../Slider/HomeSlider";
const Home = () => {
  const prev = React.createRef();
  const next = React.createRef();
  return (
    <>
      <HomeSlider />
      <Service />
      <ShopByCategory />
      <Banner
        image={
          "https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/banner1.jpg"
        }
      />
      <BestSellerDeals />
      <SaleBanner />
      <ProdHeader {...{ prev, next }} />
      <Banner
        image={
          "https://demo.wpthemego.com/themes/sw_emarket/layout2/wp-content/uploads/2017/07/banner2.jpg"
        }
      />
      <TrendHeader {...{ prev, next }} />
      <Brands />
      <Blogs />
    </>
  );
};

export default Home;
