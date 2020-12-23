import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://jsonplaceholder.typicode.com/posts",
  },
  staging: {
    apiUrl: "https://api.amu.ac.in/api/v1/amu-news?lang=en&year=2012&month=10",
  },
  prod: {
    apiUrl: "https://api.amu.ac.in/api/v1/amu-news?lang=en&year=2012&month=10i",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
