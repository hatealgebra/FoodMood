export const ROUTES_NAVBAR = {
  HOME_PAGE: { name: 'home', path: '/' },
  SEARCH_PAGE: { name: 'search', path: '/search' },
  FAVOURITES_PAGE: { name: 'favourites', path: '/favourites' },
  MEAL_PLAN_PAGE: { name: 'mealPlan', path: '/mealPlan' },
};

export const ROUTES_APP = {
  ...ROUTES_NAVBAR,
  SIGNIN_PAGE: { name: 'signin', path: '/signin' },
  SIGNUP_PAGE: { name: 'signup', path: '/signup' },
};

export default {};
