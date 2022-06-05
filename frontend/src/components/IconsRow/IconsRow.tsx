import React, {FC} from 'react';
import windspeed from "../../assets/windspeed.svg";
import pressure from "../../assets/pressure.png";
import cloudcover from "../../assets/cloudcover.svg";
import {ICurrentSate, IWeatherDays} from "../../redux/reducers/weatherReducer";
import './IconsRow.scss';

interface IconsRowProps {
    currentWeatherState: ICurrentSate | IWeatherDays | null
}

const IconsRow: FC<IconsRowProps> = ({currentWeatherState}) => {
    return (
        <div className='app__addInfo'>
            <div className="app__windSpeed addInfoItem"><img src={windspeed} className='app__addInfoIcon'
                                                             alt=""/><span
                className="app__addInfoText">{currentWeatherState?.windspeed} mph</span></div>
            <div className="app__pressure addInfoItem"><img src={pressure} className='app__addInfoIcon'
                                                            alt=""/><span
                className="app__addInfoText">{currentWeatherState?.pressure} pa</span></div>
            <div className="app__cloudCover addInfoItem"><img src={cloudcover} className='app__addInfoIcon'
                                                              alt=""/><span
                className="app__addInfoText">{currentWeatherState?.cloudcover}%</span></div>
        </div>
    );
};

export default IconsRow;