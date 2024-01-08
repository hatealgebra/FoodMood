import React from "react";

import AppSection from "~molecules/appSection/AppSection";
import DishPlan from "~molecules/dishPlan/DishPlan";

import pumpkinSoup from "~assets/images/presentation/pumpkin-soup.jpg";

const MealPlanPage = () => {
  return (
    <AppSection headingOne="Today's meal" headingTwo="plan">
      <DishPlan
        dish="breakfast"
        img={pumpkinSoup.src}
        mealName="Pumpkin soup"
      />
      <DishPlan
        dish="breakfast"
        img={pumpkinSoup.src}
        mealName="Pumpkin soup"
      />
      <DishPlan
        dish="breakfast"
        img={pumpkinSoup.src}
        mealName="Pumpkin soup"
      />
    </AppSection>
  );
};

export default MealPlanPage;
