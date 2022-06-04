import {ActionTypes, IActions} from "../types/action-types";

interface ITheme{
    bgColor:string
}
const defaultState:ITheme={
    bgColor: 'blue'
}

export const currentPageReducer =(state=defaultState,action:IActions)=>{
    switch(action.type){
        case ActionTypes.SET_THEME: return {...state,bgColor:action.payload}
        default: return state;
}
}
