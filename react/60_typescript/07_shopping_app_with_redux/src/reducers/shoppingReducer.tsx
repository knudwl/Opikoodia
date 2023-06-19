import { get } from 'http';
import * as actionConstants from '../types/actionConstants';
import {ShoppingState} from '../types/states';
import { AnyAction,Reducer } from 'redux';

const getInitialState = () => {
    let state = sessionStorage.getItem("shoppingstate");
    if(state) {
        return JSON.parse(state);
    } else {
        return {
            isLogged:false,
            loading:false,
            error:"",
            token:"",
            user:""
        }
    }
}

const saveToStorage = (state:ShoppingState) => {
    sessionStorage.setItem("shoppingstate",JSON.stringify(state));
}

const initialState = getInitialState();

const shoppingReducer:Reducer<ShoppingState,AnyAction> = (state = initialState,action) => {
    console.log("ShoppingReducer, action",action);
    let tempState = {
        ...state
    }
    switch(action.type) {
        case actionConstants.LOADING:
            return {
                ...state,
                error:""
            }
        case actionConstants.FETCH_LIST_SUCCESS:
            tempState = {
                ...state,
                list:action.list
            }
            saveToStorage(tempState);
            return tempState;
        case actionConstants.ADD_ITEM_SUCCESS:
        case actionConstants.REMOVE_ITEM_SUCCESS:
        case actionConstants.EDIT_ITEM_SUCCESS:
            return state;
        case actionConstants.FETCH_LIST_FAILED:
        case actionConstants.ADD_ITEM_FAILED:
        case actionConstants.REMOVE_ITEM_FAILED:
        case actionConstants.EDIT_ITEM_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
            saveToStorage(tempState);
            return tempState;
        case actionConstants.LOGOUT_FAILED:
        case actionConstants.LOGOUT_SUCCESS:
            tempState= {
                list: [],
                error:""
            }
            saveToStorage(tempState);
            return tempState;
        default:
            return state;
    }
}

export default shoppingReducer;