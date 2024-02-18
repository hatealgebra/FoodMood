import Homepage from './app/index';
import AboutPage from './app/AboutPage';
import TermsPolicyPage from './app/TermsPolicyPage';

const ROUTE_WEB = {
  HOME_PAGE: { path: '/', Component: Homepage },
  ABOUT_PAGE: { path: '/about', Component: AboutPage },
  TERMS_POLICY_PAGE: { path: '/terms', Component: TermsPolicyPage },
};

export default ROUTE_WEB;
