import React, { createContext, useState } from "react";

const hero = "/assets/home-page/Hero/hero-img.png";
const buy = "/assets/home-page/sales/Buy.jpeg";
const upcomingSeason = "/assets/home-page/sales/upcomingSeason.jpeg";
const blog = "/assets/Blog-Page/Bbg.jpeg";
const about = "/assets/About/about-banner.png";
const Shop = "/assets/home-page/shop-intro-bg.jpg";
const banner = "/assets/home-page/super-sale.jpeg";

export const BackgroundContext = createContext();
const SetBackgroundContext = (props) => {
  const [Bg, setBg] = useState([
    { HeroBG: hero },
    { buyOneGetOneBg: buy },
    { upcomingSeasonBG: upcomingSeason },
    { blogHeaderBg: blog },
    { aboutHeaderBg: about },
    { ShopHeaderBg: Shop },
    { bannerBg: banner },
  ]);

  return (
    <div>
      <BackgroundContext.Provider value={{ Bg, setBg }}>
        {props.children}
      </BackgroundContext.Provider>
    </div>
  );
};

export default SetBackgroundContext;