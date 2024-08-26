import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const marketingRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(marketingRef.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        console.log("container noticed navigation", history.location);
        const { pathname } = history.location;
        if (pathname !== nextPathName) history.push(nextPathName);
      },
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);
  return <div ref={marketingRef} />;
};
