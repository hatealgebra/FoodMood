import React from "react";
// import { Route, Routes } from "react-router-dom";

import * as routerConstantClass from "../../utils/constants/router.constants";

const { ROUTE_WEB, ROUTE_APP } = routerConstantClass;

const AppRouter = () => (
  <div className="App">
    {/* <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path={ROUTE_WEB.LOGIN_PAGE} element={<LoginPage />} />
      <Route path={ROUTE_WEB.REGISTER_PAGE} element={<SignupPage />} />
      <Route path={ROUTE_WEB.ABOUT_PAGE} element={<AboutPage />} />
      <Route path={ROUTE_WEB.TERMS_POLICY_PAGE} element={<TermsPage />} />
      <Route
        path={ROUTE_APP.APP_HOME_PAGE}
        element={
          <PrivateRoute>
            <AppHomepage />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_APP.APP_SEARCH_PAGE}
        element={
          <PrivateRoute>
            <SearchPage />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_APP.APP_MEAL_PLAN_PAGE}
        element={
          <PrivateRoute>
            <MealPlanPage />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_APP.APP_FAVOURITES_PAGE}
        element={
          <PrivateRoute>
            <SavedRecipesPage />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_APP.APP_USER_PAGE}
        element={
          <PrivateRoute>
            <UserSettings />
          </PrivateRoute>
        }
      />
    </Routes> */}
  </div>
);

export default AppRouter;
