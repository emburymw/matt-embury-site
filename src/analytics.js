import ReactGA from 'react-ga4';

const GA_TRACKING_ID = "G-YS7KYWRDT5";

const initializeGA = () => {
  try {
    ReactGA.initialize(GA_TRACKING_ID);
  } catch (error) {
    console.warn('Google Analytics failed to initialize:', error);
  }
};

const trackPageView = (path) => {
  try {
    ReactGA.send({ hitType: 'pageview', page: path });
  } catch (error) {
    console.warn('Google Analytics pageview tracking failed:', error);
  }
};

const trackEvent = (action, category, label, value) => {
  try {
    ReactGA.event({
      action: action,
      category: category,
      label: label,
      value: value
    });
  } catch (error) {
    console.warn('Google Analytics event tracking failed:', error);
  }
};

export { initializeGA, trackPageView, trackEvent };