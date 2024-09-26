
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './index.js'; // Importa tus reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
