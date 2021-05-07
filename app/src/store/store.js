import {createStore} from 'redux';
import {walletReducer} from './reducer';
const store = createStore(walletReducer);
export default store;