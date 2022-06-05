import React, {FC} from 'react';
import './SevenDaysHeader.scss';
import ChangeButton from "../UI/ChangButton/ChangeButton";
import {useNavigate} from "react-router-dom";
import {ActionTypesModal} from "../../redux/reducers/modalSearchReducer";
import {useDispatch} from "react-redux";
import ThreeDots from "../UI/ThreeDots/ThreeDots";
import GoBackButton from "../UI/GobackButton/GoBackButton";
interface  ISevenDaysHeader{
    city:string
}
const SevenDaysHeader:FC<ISevenDaysHeader> = ({city}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goBack = () => {
        navigate('../' + city, {replace: true});
    }
    const changeCity = (city: string) => {
        dispatch({type: ActionTypesModal.modalOpen});
    }
    return (
        <header className='sevenDays__wrapper'>
            <div className='sevenDays__header'>
                <GoBackButton onClick={goBack}/>
                <div className='sevenDays__cityName'>{city}</div>
                <ThreeDots/>
            </div>
            <div className='sevenDays__changeButton'><ChangeButton onClick={() => changeCity('saf')}/></div>
        </header>
    );
};

export default SevenDaysHeader;