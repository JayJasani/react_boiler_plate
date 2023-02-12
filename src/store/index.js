import { configureStore } from "@reduxjs/toolkit";
import customMiddleware from "./middleware";
import thunkMiddleware from "redux-thunk";
import monitorReducersEnhancer from "./enhancers/monitorReducers";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./reducer";
import { persistStore } from "redux-persist";

const middlewares = [customMiddleware];
middlewares.push(thunkMiddleware);
if (process.env.NODE_ENV !== "production") {
  middlewares.push(loggerMiddleware);
}

export function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
    enhancers: [monitorReducersEnhancer],
  });
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducer", () => store.replaceReducer(rootReducer));
  }
  let persistor = persistStore(store);
  return { store, persistor };
}
  