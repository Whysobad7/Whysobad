import { createStore, combineReducers } from 'redux';
import { themeReducer } from './themeReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
	theme: themeReducer,
})


export const store = createStore(rootReducer, composeWithDevTools())
