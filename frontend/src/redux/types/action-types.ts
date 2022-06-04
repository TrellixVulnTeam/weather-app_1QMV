export enum ActionTypes {
    FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
    FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
    SET_THEME='SET_THEME'
}

export interface IActions {
    type: ActionTypes
    payload?: any
}