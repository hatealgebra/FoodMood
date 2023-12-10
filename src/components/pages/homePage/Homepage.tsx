import React from "react";
import useWindowSize, { WindowSize } from "~hooks/useWindowSize";

import HomePagePresentation from "../../presentation/HomePagePresentation";
import GenericPage from "../../templates/genericPage/GenericPage";

const Homepage = () => {
  const deviceWidth: WindowSize = useWindowSize();

  return (
    <GenericPage>
      <HomePagePresentation mobile={deviceWidth.width! < 670 ? true : false} />
    </GenericPage>
  );
};

export default Homepage;
