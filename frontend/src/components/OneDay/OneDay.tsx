import React, {FC, useMemo} from 'react';
import './OneDay.scss';
import {IWeatherDays} from "../../redux/reducers/weatherReducer";
import {useNormalDate} from "../../hooks/useNormalDate";
import sun from '../../assets/sun.png';
import cloud from '../../assets/cloud.png';
interface OneDayProps{
    onClick:(index:number)=>void
    day: IWeatherDays
}
const OneDay:FC<OneDayProps> = ({onClick,day}) => {
    const date:string = useNormalDate(day).split(' ')[0];
    const newDate = useMemo(()=>{
        const newArr = date.split('');
        const removed = newArr.splice(3);
        return newArr;
    },[date]);
    console.log(newDate)
    return (
        <div className='oneDay'>
            <div className='dayOfWeek'>{newDate}</div>
            <div className='oneDayImgWrapper'>
                <img src={day.conditions==='Clear'?sun:cloud} alt=""/>
                <span className='oneDayConditions'>{day.conditions}</span>
            </div>
            <div className='oneDayTemp'>
                <div className='oneDayHighest oneDayTempEx'>{Math.ceil(day.tempmax)}</div>
                <div className='oneDayLowest oneDayTempEx'>{Math.ceil(day.tempmin)}</div>
            </div>
        </div>
    );
};

export default OneDay;