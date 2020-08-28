import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("UA-162846832-2");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
