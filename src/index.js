import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "react-notifications/lib/notifications.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { configureAppStore } from "./store";
import addAuthTokenInterceptor from "./api/addAuthTokenInterceptor";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const configureStore = configureAppStore();

addAuthTokenInterceptor(configureStore.store);
const AppWithStore = () => {
  return (
    <StoreProvider store={configureStore.store}>
      <PersistGate loading={<></>} persistor={configureStore.persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Router>
        <AppWithStore />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
