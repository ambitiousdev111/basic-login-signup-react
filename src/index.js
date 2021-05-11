import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./data/reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const reduxStore = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(reduxStore);
// const reduxStore = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
 
    <BrowserRouter>
      <Provider store={reduxStore}>
        <PersistGate  persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
 ,
  document.getElementById("root")
);


