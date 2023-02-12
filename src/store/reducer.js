import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";

import userReducer from "./user";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const encryptor = encryptTransform({
  secretKey: process.env.REACT_APP_SECRET_KEY,
  onError: function (error) {
    // Handle the error.
    console.error("encryptTransform", error);
  },
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user"],
  // blacklist: ["auth"],
  // stateReconciler: hardSet,
  transforms: [encryptor],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  
});
export default persistReducer(persistConfig, rootReducer);
