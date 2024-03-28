import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import MainNavigation from "./navigation";
import { PersistGate } from "redux-persist/integration/react";
const MainApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default MainApp;
