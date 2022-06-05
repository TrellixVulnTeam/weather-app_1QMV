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

const SevenDays = () => {
    const [isLoading, city, weatherDays] = useFetchSevenDays();
    const changedCity = useTypedSelector(state=>state.weather?.resolvedAdress);
    const [selectedDay, setSelectedDay] = useState<number>(0);
    const day = useMemo(()=>{
         return weatherDays ? weatherDays[selectedDay] : undefined;
    },[weatherDays]);
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

        </div>
    );
};

export default SevenDays;