import React, {useMemo, useState} from 'react';
import Loader from "../../components/Loader/Loader";
import {useFetchSevenDays} from "../../hooks/useFetchSevenDays";
import {useNormalDate} from "../../hooks/useNormalDate";
import './SevenDays.scss';
import {useDispatch} from "react-redux";
import {ActionTypesModal} from "../../redux/reducers/modalSearchReducer";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {CSSTransition} from "react-transition-group";
import ModalSearch from "../../components/ModalSearch/ModalSearch";
import SevenDaysHeader from "../../components/SevenDaysHeader/SevenDaysHeader";
import SevenDaysDay from "../../components/SevenDays-Day/SevenDays-Day";
import {IWeatherDays} from "../../redux/reducers/weatherReducer";
import DayList from "../../components/DaysList/DayList";

const SevenDays = () => {
    const [isLoading, city, weatherDays] = useFetchSevenDays();
    const changedCity = useTypedSelector(state=>state.weather?.resolvedAdress);
    const [selectedDay, setSelectedDay] = useState<number>(1);
    const setDay = (index:number)=>{
        setSelectedDay(index);
    }
    const day = useMemo(()=>{
         return weatherDays ? weatherDays[selectedDay] : undefined;
    },[weatherDays]);
    const daysList = useMemo<IWeatherDays[]>(()=>{
        return weatherDays?.filter(day=>weatherDays.indexOf(day)!==selectedDay)
    },[selectedDay,weatherDays]);
    console.log(daysList)
    const isOpenModal = useTypedSelector(state => state.modal.isOpen);
    const dispatch = useDispatch();
    const date = useNormalDate(day);
    if (isLoading) {
        return <div className='app__LoaderWrapper'><Loader marginTop={200}/></div>
    }
    return (
        <div className='sevenDays'>
            {isOpenModal ? <div className="background" onClick=
                {() => dispatch({type: ActionTypesModal.modalClose})}></div> : ''}
            <CSSTransition in={isOpenModal} unmountOnExit mountOnEnter
                           timeout={350} classNames='my-modal'>
                <ModalSearch/>
            </CSSTransition>
            <SevenDaysHeader city={changedCity||city}/>
            <SevenDaysDay day={day} date={date}/>
            <DayList daysList={daysList} selectedDay={selectedDay} onClick={setDay}/>
        </div>
    );
};

export default SevenDays;