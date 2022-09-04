import React from "react";
import HomePagePresentation from "../components/presentation/HomePagePresentation";
import GenericPage from "../components/templates/genericPage/GenericPage";

import useWindowSize, { WindowSize } from "../utils/hooks/useWindowSize";

const index = () => {
  const deviceWidth: WindowSize = useWindowSize();

  return (
    <GenericPage>
      <HomePagePresentation mobile={deviceWidth.width! < 670 ? true : false} />
    </GenericPage>
  );
};

export default index;
