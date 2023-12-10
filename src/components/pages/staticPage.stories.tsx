import React from "react";
import Homepage from "./homePage/Homepage";
import GenericPage from "../templates/genericPage/GenericPage";
import TermsPage from "./termsPage/TermsPage";
import AboutPage from "./aboutPage/AboutPage";

export const StaticHomepage = () => <Homepage />;
export const About = () => <AboutPage />;
export const TermsAndConditions = () => <TermsPage />;

export default {
  component: GenericPage,
  subcomponents: { Homepage, TermsPage },
  title: "Pages/Static pages",
};
