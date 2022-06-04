import {ICurrentSate} from "../redux/reducers/weatherReducer";
import {daysLong} from "../utils/days";
import {useMemo} from "react";

export const useNormalDate = (currentWeatherState: ICurrentSate) => {
    function getLongDay(daySh: string) {
        return daysLong.filter(day => day.dayShort === daySh)[0].dayLong
    }

    const date = useMemo<string>(() => {
        if (currentWeatherState?.datetimeEpoch === undefined) return '';
        let fullDate: string = String(new Date(currentWeatherState?.datetimeEpoch * 1000)).split('202')[0];
        const day: string = getLongDay(fullDate.split(' ')[0]);
        const newFullDate: string = fullDate.replace(fullDate.split(' ')[0], day);
        return newFullDate.split(' ')[0] + ' ' +
            newFullDate.split(' ')[2] + ' ' +
            newFullDate.split(' ')[1];
    }, [currentWeatherState?.datetimeEpoch]);
    return date;
}