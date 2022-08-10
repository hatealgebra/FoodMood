import React from "react";

import Index from "./index";
import Login from "./login";
import Register from "./register";
import Terms from "./terms-&-policy";

export const IndexPage = () => <Index />;
export const LoginPage = () => <Login />;
export const RegisterPage = () => <Register />;
export const TermsPage = () => <Terms />;

export default {
  components: Login,
  title: "Pages/Static",
};
