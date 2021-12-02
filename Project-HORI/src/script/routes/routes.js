import landingPage from '../view/pages/landing';
import searchPage from '../view/pages/search';
import aboutPage from '../view/pages/about';
import apiPage from '../view/pages/apiPage';

const routes = {
  '/': landingPage,
  '/landing-page': landingPage,
  '/search-page': searchPage,
  '/about-page': aboutPage,
  '/api-page': apiPage,
};

export default routes;
