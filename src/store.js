import { createStore } from 'redux';
import { counter } from './counter';

const enhancer = 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(counter, enhancer);


export default store;