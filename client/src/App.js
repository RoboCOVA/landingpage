import React from "react";

import { Provider } from "react-redux";
import store from "./store";
import HomePages from "./componets/LandingPage";
const App = () => {
  return (
    <Provider store={store}>
      <HomePages />
    </Provider>
  );
};

export default App;
