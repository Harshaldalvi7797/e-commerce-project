import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import reducers from "./redux/store";
import { persistStore, persistReducer } from "redux-persist";
import { persistConfig } from "./redux/store/index";
import { PersistGate } from "redux-persist/integration/react";
const persistReducers = persistReducer(persistConfig, reducers);
const store = createStore(persistReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={<h1>hii</h1>} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  // <Provider store={createStore(reducers, applyMiddleware(thunk))}>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </Provider>

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
