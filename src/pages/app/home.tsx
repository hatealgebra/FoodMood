import React, { useEffect } from "react";

import { Center, Stack } from "@chakra-ui/react";
import AppPage from "../../components/templates/appPage/AppPage.template";
import AppSection from "../../components/molecules/appSection/AppSection";
import AlertBox from "../../components/atoms/alertBox/AlertBox";
import SavedRecipesCardRow from "../../components/organisms/recipeCardRow/SavedRecipesCardRow";
import RandomRecipesCardRow from "../../components/organisms/recipeCardRow/RandomRecipesCardRow";

const AppHomepage = () => {
  return (
    <AppPage>
      <RandomRecipesCardRow />
      <Stack
        direction={{ base: "column", lg: "row" }}
        width={["100%", "95%", "95%", "80%"]}
        maxW="1600px"
        margin="auto"
      >
        <AppSection fullWidth headingOne="Today's meal" headingTwo="plan">
          <Center>
            <AlertBox status="info">Work in progress</AlertBox>
          </Center>
          {/* <Stack direction={{ base: "column", sm: "row" }} spacing={15}>
          <DishPlan dish="breakfast" img={pumpkinSoup} mealName="Pumkin soup" />
          <DishPlan dish="lunch" img={pumpkinSoup} mealName="Pumkin soup" />
          <DishPlan dish="dinner" img={pumpkinSoup} mealName="Pumkin soup" />
        </Stack> */}
        </AppSection>
        <SavedRecipesCardRow />
      </Stack>
    </AppPage>
  );
};

export default AppHomepage;
