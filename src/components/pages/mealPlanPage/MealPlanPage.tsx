import React from "react";

import AppSection from "../../molecules/appSection/AppSection";
import DishPlan from "../../molecules/dishPlan/DishPlan";
import AppPage from "../../templates/appPage/AppPage.template";

import pumpkinSoup from "../../../assets/images/presentation/pumpkin-soup.jpg";

const MealPlanPage = () => {
  return (
    <AppPage>
      <AppSection headingOne="Today's meal" headingTwo="plan">
        <DishPlan dish="breakfast" img={pumpkinSoup} mealName="Pumpkin soup" />
        <DishPlan dish="breakfast" img={pumpkinSoup} mealName="Pumpkin soup" />
        <DishPlan dish="breakfast" img={pumpkinSoup} mealName="Pumpkin soup" />
      </AppSection>
    </AppPage>
  );
};

export default MealPlanPage;
