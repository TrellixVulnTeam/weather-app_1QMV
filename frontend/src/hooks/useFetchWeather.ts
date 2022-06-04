import {useActions} from "./useActions";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {ActionTypes} from "../redux/types/action-types";
import {WeatherApi} from "../API/WeatherApi";
import {IWeather} from "../redux/reducers/weatherReducer";

export const useFetchWeather = (city:string) => {
    const [isLoading,setIsLoading] = useState<boolean>(true);
    const {fetchWeather} = useActions();
    const dispatch = useDispatch();
    const fetchWeatherFunc = async () => {
        try {
            const weather:IWeather = await WeatherApi.getWeatherByCity(city);
            setIsLoading(false);
            return fetchWeather(weather);
        } catch (e) {
            dispatch({type: ActionTypes.FETCH_WEATHER_ERROR, payload: 'error 404'});
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchWeatherFunc();
    }, []);
    return isLoading;
}