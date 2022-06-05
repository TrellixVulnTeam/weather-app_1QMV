import React, {FC} from 'react';
import {IWeatherDays} from "../../redux/reducers/weatherReducer";
import OneDay from "../OneDay/OneDay";
interface DayListProps{
    daysList:IWeatherDays[],
    selectedDay:number,
    onClick:(index:number)=>void,
}
const DayList:FC<DayListProps> = ({onClick,daysList,selectedDay}) => {
    return (
        <div>
            {daysList?.map(day=>daysList.indexOf(day)!==0&&daysList.indexOf(day)!==selectedDay
                ?<OneDay day={day} onClick={onClick} key={day.datetimeEpoch}/>:'')}
        </div>
    );
};

export default DayList;