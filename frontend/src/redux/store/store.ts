import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25});
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));