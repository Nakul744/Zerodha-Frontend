import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageurl="media\images\kite.png"
        productname="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/"
        learnmore="/"
        googleplay="/"
        appStore="/"
        tryDemotext="Try demo"
        learnmoretext="Learn more"
      />
      <RightSection
        head="Console"
        desription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore="/"
        learnmoretext="Learn more"
        imageurl="media\images\console.png"
      />
      <LeftSection
        imageurl="media\images\varsity.png"
        productname="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="/"
        learnmore="/"
        googleplay="/"
        appStore="/"
        tryDemotext="Try demo"
        learnmoretext="Learn more"
      />
      <RightSection
        head="Kite Connect API"
        desription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnmore="/"
        learnmoretext="Kite Connect"
        imageurl="media\images\kiteconnect.png"
      />

      <LeftSection
        imageurl="media\images\coin.png"
        productname="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="/"
        learnmore="/"
        googleplay="/"
        appStore="/"
        tryDemotext="Coin"
        learnmoretext="Learn More"
      />
      

      <Universe />
    </>
  );
}

export default ProductsPage;
