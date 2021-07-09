import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import logger from "redux-logger";
import formReducer from "./form/form-reducer";

const myMiddlWare = (stor) => (next) => (action) => {
  console.log("прослойка ", action);
  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddlWare,
  logger,
];

const store = configureStore({
  reducer: {
    contacts: formReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
