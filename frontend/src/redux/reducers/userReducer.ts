export enum UserActions {
    login = 'login',
    logout = 'logout',
    addCity = 'addCity'
}

export interface IUserActions {
    type: UserActions,
    payload: any
}

interface IDefaultState {
    login: string | null,
    email: string | null,
    token: string | null,
    cities: Array<string> | null,
    isAuthed: boolean
}

const defaultState: IDefaultState = {
    login: null,
    email: null,
    token: null,
    cities: null,
    isAuthed: false
}
export const UserReducer = (state = defaultState, action: IUserActions) => {
    switch (action.type) {
        case UserActions.login:
            return {
                ...state, login: action.payload.login, email: action.payload.email,
                token: action.payload.token, isAuthed: true
            };
        case UserActions.addCity:
            return {...state, cities: action.payload.cities};
        case UserActions.logout:
            return {
                ...state, login: null, email: null,
                token: null, cities: null, isAuthed: false
            }
        default:
            return state;
    }
}
