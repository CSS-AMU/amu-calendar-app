import Constants from "expo-constants";

const settings = {
  dev: {
<<<<<<< HEAD
    apiUrl: "http://192.168.43.102:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.43.102:9000/api",
  },
  prod: {
    apiUrl: "http://192.168.43.102:9000/api",
=======
    apiUrl: "https://jsonplaceholder.typicode.com/posts",
  },
  staging: {
    apiUrl: "https://api.amu.ac.in/api/v1/amu-news?lang=en&year=2012&month=10",
  },
  prod: {
    apiUrl: "https://api.amu.ac.in/api/v1/amu-news?lang=en&year=2012&month=10i",
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
