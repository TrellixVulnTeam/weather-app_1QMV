import {useEffect} from "react";
import {ActionTypes} from "../redux/types/action-types";
import {useTypedSelector} from "./useTypedSelector";
import {useDispatch} from "react-redux";

export const useTheme =()=>{
    const dispatch = useDispatch();
    const currentWeatherCond:string = useTypedSelector(state => state.weather?.currentState?.conditions);
    useEffect(() => {
        if (currentWeatherCond === undefined)
            return;
        if (currentWeatherCond === 'Clear')
            dispatch({type: ActionTypes.SET_THEME, payload: 'blue'});
        else
            dispatch({type: ActionTypes.SET_THEME, payload: 'gray'});
    }, [currentWeatherCond]);
}