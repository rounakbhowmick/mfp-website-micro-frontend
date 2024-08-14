import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const marketingRef = useRef(null);

  useEffect(() => {
    if (marketingRef.current) {
      console.log("marketingRef", marketingRef);
      mount(marketingRef.current);
    }
  }, []);
  return <div ref={marketingRef} />;
};
