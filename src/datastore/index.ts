import { applyMiddleware, combineReducers, compose, createStore } from "redux";
//import loginReducer from './entities/auth/login.reducer.js';
// import filterContent from './entities/content/content.reducer';
// import filterTopBarReducer from './entities/filter-top-bar/filter-top-bar.reducer';
// import filterReducer from './entities/filter/filter.reducer';
// import initialPathReducer from './entities/initial-path/initialPath.reducer';
// import magazineReducer from './entities/magazine/magazine.reducer';
// import modalReducer from './entities/modal/modal.reducer.js';
// import navigateReducer from './entities/navigate/navigate.reducer';
// import tabReducer from './entities/tab/tab.reducer';
// import topBarMenuReducer from './entities/top-bar-menu/top-bar-menu.reducer';
// import userReducer from './entities/user/user.reducer.js';
// import analyticsMiddleware from './middleware/analytics';
import ENTITIES from './entities'
import exceptionMiddleware from "./middleware/exception";
import loggerMiddleware from "./middleware/logger";
import storageMiddleware from "./middleware/storage";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(exceptionMiddleware, loggerMiddleware, storageMiddleware, ...ENTITIES.UI.MIDDLEWARE), 
);

export default createStore(
  combineReducers({
ui: ENTITIES.UI.REDUCER
    //connected: loginReducer,
    // userInfo: userReducer,
    // modal: modalReducer,
    // topBar: topBarMenuReducer,
    // filter: filterReducer,
    // filterTopBar: filterTopBarReducer,
    // content: filterContent,
    // tab: tabReducer,
    // navigate: navigateReducer,
    // magazine: magazineReducer,
    // initialPath: initialPathReducer,
  }),
  enhancer
);
