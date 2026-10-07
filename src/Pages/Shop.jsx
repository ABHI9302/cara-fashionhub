import React from "react";

import ShopBg from "/assets/home-page/shop-intro-bg.jpg";
import ShopCards from "../Sections/ShopCards";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Newsletter from "../Sections/Newsletter";

const Shop = () => {
  const headerData = [
    {
      img: ShopBg,
      heading: "#Shop",
      desc: "Save more with coupons & up to 70% off!",
    },
  ];
  return (
    <>
      <Header HData={headerData} />
      <div className="flex flex-wrap justify-center xl:justify-between px-20 py-20 gap-10">
        <ShopCards />
      </div>
    </>
  );
};

export default Shop;