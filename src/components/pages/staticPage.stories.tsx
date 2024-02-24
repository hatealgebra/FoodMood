import React from "react";
import Homepage from "~app/page";
import GenericPage from "../templates/genericPage/GenericPage";
import TermsPage from "./termsPage/TermsPage";
import AboutPage from "~app/about/page";

export const StaticHomepage = () => <Homepage />;
export const About = () => <AboutPage />;
export const TermsAndConditions = () => <TermsPage />;

export default {
  component: GenericPage,
  subcomponents: { Homepage, TermsPage },
  title: "Pages/Static pages",
};
