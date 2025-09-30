import ReactGA from 'react-ga4';

const GA_TRACKING_ID = "G-YS7KYWRDT5";

const initializeGA = () => {
  ReactGA.initialize(GA_TRACKING_ID);
};

const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

const trackEvent = (action, category, label, value) => {
  ReactGA.event({
    action: action,
    category: category,
    label: label,
    value: value
  });
};

export { initializeGA, trackPageView, trackEvent };