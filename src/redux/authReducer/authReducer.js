import { LOGIN_REQUEST } from './actionType';
import tableData from '../../utils/tableData.json';
import cardData from '../../utils/cardData.json';


const initState = {
    isAuth: false,
    tableData,
    cardData
}

export const authReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case 'LOGIN_REQUEST':
            return 
        default:
            return state
    }
}