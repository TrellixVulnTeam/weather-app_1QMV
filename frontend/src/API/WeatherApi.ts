import axios from "axios";
import {IWeather} from "../redux/reducers/weatherReducer";

export class WeatherApi {
    static getWeatherByCity = async (city: string) => {
        const response = await axios.get<IWeather>(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=KXLCQFR4Q8PKE8LW86YXF7QWD&contentType=json`);
        return response.data;
    }

}