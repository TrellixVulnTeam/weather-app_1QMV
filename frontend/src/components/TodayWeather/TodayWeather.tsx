import React from 'react';
import cloud from "../../assets/cloud.png";
import sun from "../../assets/sun.png";
import windspeed from "../../assets/windspeed.svg";
import pressure from "../../assets/pressure.png";
import cloudcover from "../../assets/cloudcover.svg";
import {ICurrentSate} from "../../redux/reducers/weatherReducer";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNormalDate} from "../../hooks/useNormalDate";
import './TodayWeather.scss';

const TodayWeather = () => {
    const currentWeatherState: ICurrentSate = useTypedSelector(state => state.weather?.currentState);
    const date: string = useNormalDate(currentWeatherState);
    return (
        <>
            <div className="app__imgWrapper">
                <img src={currentWeatherState?.conditions !== 'Clear' ? cloud : sun} alt=""/>
            </div>
            <div className='app__someInfo'>
                <div className='app__temp'>{currentWeatherState?.temp}</div>
                <div className='app__conditions'>{currentWeatherState?.conditions}</div>
            </div>
            <div className='app__date'>{date}</div>
            <div className='app__addInfo'>
                <div className="app__windSpeed addInfoItem"><img src={windspeed} className='app__addInfoIcon'
                                                                 alt=""/><span
                    className="app__addInfoText">{currentWeatherState?.windspeed} mph</span></div>
                <div className="app__pressure addInfoItem"><img src={pressure} className='app__addInfoIcon'
                                                                alt=""/><span
                    className="app__addInfoText">{currentWeatherState?.pressure} pa</span></div>
                <div className="app__cloudCover addInfoItem"><img src={cloudcover} className='app__addInfoIcon' alt=""/><span
                    className="app__addInfoText">{currentWeatherState?.cloudcover}%</span></div>
            </div>
        </>
    );
};

export default TodayWeather;