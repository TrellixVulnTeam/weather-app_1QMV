import {IWeather} from "../reducers/weatherReducer";
import {Dispatch} from "redux";
import {ActionTypes, IActions} from "../types/action-types";

export const fetchWeather = (payload: IWeather) => {
    return (dispatch: Dispatch<IActions>) => {
        try {
            dispatch({type: ActionTypes.FETCH_WEATHER_SUCCESS, payload});
        } catch (e) {
            console.log(e);
        }
    }
}
