import React, {FC} from 'react';
import './TodayForecast.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ActionTypesModal} from "../../redux/reducers/modalSearchReducer";
import {useNavigate, useParams} from "react-router-dom";
import {useFetchWeather} from "../../hooks/useFetchWeather";
import {useDispatch} from "react-redux";
import Loader from "../../components/Loader/Loader";
import ModalSearch from "../../components/ModalSearch/ModalSearch";
import TodayWeather from "../../components/TodayWeather/TodayWeather";
import {CSSTransition} from "react-transition-group";
import ChangeButton from "../../components/UI/ChangButton/ChangeButton";


const TodayForecast: FC = () => {
    const isOpenModal = useTypedSelector(state => state.modal.isOpen);
    const currentCity: string = useTypedSelector(state => state.weather?.resolvedAdress);
    const openModalMenu = () => {
        dispatch({type: ActionTypesModal.modalOpen})
    }
    type IParamsWeather = {
        city: string
    }
    const params = useParams<IParamsWeather>();
    const defaultCity:string = useTypedSelector(state => state.weather.resolvedAdress);
    const city: string = params.city || defaultCity;
    const navigate = useNavigate();
    const redirectSevenDays = ()=>{
        navigate(`/7days/${city}`,{replace:true});
    }
    const isLoading: boolean = useFetchWeather(city);
    const dispatch = useDispatch();
    if (isLoading) {
        return <div className='app__LoaderWrapper'><Loader marginTop={200}/></div>
    }
    return (
        <div className='app__todayWrapper'>
            <div className="app__city">{currentCity}</div>
            <ChangeButton onClick={openModalMenu}/>
            {isOpenModal ? <div className="background" onClick=
                {() => dispatch({type: ActionTypesModal.modalClose})}></div> : ''}
            <CSSTransition in={isOpenModal} unmountOnExit mountOnEnter
                           timeout={350} classNames='my-modal'>
                <ModalSearch/>
            </CSSTransition>
            <TodayWeather/>
            <button className='app__redirectButton smallButton' onClick={redirectSevenDays}>
                7 days
                <img src="" alt=""/>
            </button>
        </div>
    );
};

export default TodayForecast;