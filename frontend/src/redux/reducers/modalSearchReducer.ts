export enum ActionTypesModal{
    modalOpen='modalOpen',
    modalClose='modalClose'
}
export interface IActionsTypeModal{
    type:ActionTypesModal,
    payload?:void
}
interface IDefaultState{
    isOpen:boolean
}
const defaultState :IDefaultState = {
    isOpen:false
}

export const modalSearchReducer = (state=defaultState,action:IActionsTypeModal)=>{
    switch (action.type){
        case ActionTypesModal.modalClose: return{...state,isOpen:false};
        case ActionTypesModal.modalOpen: return{...state,isOpen:true};
        default: return state;
    }
}
