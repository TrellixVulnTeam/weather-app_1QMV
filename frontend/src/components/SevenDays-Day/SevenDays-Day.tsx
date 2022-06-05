import React, {FC} from 'react';
import './SevenDays-Day.scss';
import sun from "../../assets/sun.png";
import cloud from "../../assets/cloud.png";
import IconsRow from "../IconsRow/IconsRow";
interface SevenDaysProps{
    day:any,
    date:string
}
const SevenDaysDay:FC<SevenDaysProps> = ({day,date}) => {
    return (
        <div className='sevenDays__dayInfo'>
            <div className='sevenDays__upperInfo'>
                <div className='sevenDays__imgAndPrediction'>
                    <div className='sevenDays__currentState'>{day?.conditions}</div>
                    <div className='sevenDays__imgWrapper'>
                        <img src={day?.conditions === 'Clear' ? sun : cloud}alt=""/>
                    </div>
                </div>
                <div className='sevenDays__temp-date'>
                    <div className='sevenDays__tempInfo'>
                        <div className='sevenDays__highest tempEx'>Highest<br/>
                            <div className='sevenDays__tempEx'>{day?.tempmax}</div>
                        </div>
                        <div className='sevenDays__lowest tempEx'>Lowest<br/>
                            <div className='sevenDays__tempEx'>{day?.tempmin}</div>
                        </div>
                    </div>
                    <div className="sevenDays__date">{date}</div>
                </div>
            </div>
            <div className="sevenDays__lowerInfo">
                <IconsRow currentWeatherState={day}/>
            </div>
        </div>
    );
};

export default SevenDaysDay;