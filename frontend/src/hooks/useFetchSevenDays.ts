import {useParams} from "react-router-dom";
import {useTypedSelector} from "./useTypedSelector";
import {IWeather, IWeatherDays} from "../redux/reducers/weatherReducer";
import {useEffect, useMemo, useState} from "react";
import {WeatherApi} from "../API/WeatherApi";
import {useActions} from "./useActions";

export const useFetchSevenDays = ()=>{
    type IParams = {
        city: string
    }
    const {fetchWeather} = useActions();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const params = useParams<IParams>();
    const defaultCity = useTypedSelector(state => state.weather.resolvedAdress);
    const daysArray: IWeatherDays[] = useTypedSelector(state => state.weather?.days);
    let city: string = useMemo<string>(() => {
        if (params.city)
            return params.city;
        return defaultCity;
    }, []);
    const fetchSevenDays = async (city: string) => {
        try {
            const weather: IWeather = await WeatherApi.getWeatherByCity(city);
            fetchWeather(weather);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        !daysArray? fetchSevenDays(city):setIsLoading(false);
    }, []);
    return [isLoading,city];
}