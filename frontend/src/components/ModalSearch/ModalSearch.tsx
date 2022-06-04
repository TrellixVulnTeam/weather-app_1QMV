import React, {FC, useState} from 'react';
import Loader from "../Loader/Loader";
import {TextField} from "@mui/material";
import {WeatherApi} from "../../API/WeatherApi";
import {useActions} from "../../hooks/useActions";
import {useDispatch} from "react-redux";
import {ActionTypesModal} from "../../redux/reducers/modalSearchReducer";
import './ModalSearch.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import MyButton from "../UI/MyButton/MyButton";
import {useNavigate} from "react-router-dom";

const ModalSearch: FC = () => {
    const {fetchWeather} = useActions();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isAuthed = useTypedSelector(state => state.user.isAuthed);
    const [loginOpen, setLoginOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const searchWeatherHandler = async () => {
        try {
            setIsLoading(true);
            const weather = await WeatherApi.getWeatherByCity(searchValue);
            dispatch({type: ActionTypesModal.modalClose});
            setIsLoading(false);
            navigate('/forecast/'+searchValue,{replace:true});
            return fetchWeather(weather);
        } catch (e) {
            setIsLoading(false);
            dispatch({type: ActionTypesModal.modalClose});
            return console.log(e);
        }
    }
    const loginBtnClick = () => {
        dispatch({type: ActionTypesModal.modalClose});
        setLoginOpen(true);
    }
    return (
        <div className='app__my-modal'>
            {isLoading ? <Loader/> :
                <>
                    <div className='modal__form' onClick={(e) => e.stopPropagation()}>
                            <span className='modal__closeBtn'
                                  onClick={() => dispatch({type: ActionTypesModal.modalClose})}
                            ></span>
                        <TextField className='muiInput' value={searchValue}
                                   id="standard-basic" label="City"
                                   variant="standard"
                                   onChange={(e) => setSearchValue(e.target.value)}
                                   type="text"/>
                        <MyButton classnameBtn='app__modalConfirmButton myButton'
                                  onClick={searchWeatherHandler}> Confirm
                        </MyButton>
                        {isAuthed ? '' : <div className='app__modalLoginForm'>
                            <span className='app__modalLoginFormText'>Login to see your history</span>
                            <MyButton classnameBtn='loginBtn' onClick={loginBtnClick}>Login</MyButton>
                        </div>}
                    </div>
                </>}
        </div>);
};

export default ModalSearch;