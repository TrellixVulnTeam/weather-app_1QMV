import {ActionTypes, IActions} from "../types/action-types";


export interface IWeatherDays {
    datetimeEpoch: string,
    tempmax: number,
    tempmin: number,
    conditions: string
    windspeed: number,
    pressure:number,
    cloudcover: number,
}

export interface ICurrentSate {
    temp: string,
    windspeed: number,
    cloudcover: number,
    conditions: string,
    feelslike: number,
    datetimeEpoch:number,
    pressure:number,
}

export interface IWeather {
    resolvedAdress: string,
    days?: Array<IWeatherDays>
    currentState?: ICurrentSate,
    isLoading:boolean,
    error?:string|null
}

const defaultState: IWeather = {
    resolvedAdress: 'Kyiv',
    isLoading:false,
    error:null
}
export const weatherReducer = (state = defaultState, action: IActions) => {
    switch (action.type) {
        case ActionTypes.FETCH_WEATHER_SUCCESS:
            return {
                ...state,error:null,isLoading:false, resolvedAdress: action.payload.resolvedAddress,
                days: action.payload.days, currentState: action.payload.currentConditions
            }
            case ActionTypes.FETCH_WEATHER_ERROR: return{...state,error:action.payload,isLoading:true}
        default:
            return state;
    }
}