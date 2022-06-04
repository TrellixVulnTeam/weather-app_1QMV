import {combineReducers} from "redux";
import {weatherReducer} from "./weatherReducer";
import {currentPageReducer} from "./currentPageReducer";
import {modalSearchReducer} from "./modalSearchReducer";
import {UserReducer} from "./userReducer";

export const rootReducer = combineReducers({
    weather: weatherReducer,
    currentPage:currentPageReducer,
    modal: modalSearchReducer,
    user: UserReducer
});
export type RootState = ReturnType<typeof rootReducer>;