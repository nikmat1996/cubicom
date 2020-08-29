import { authReducer } from './authReducer/authReducer';
import { createStore } from 'redux';

const store = createStore(authReducer)

export default store