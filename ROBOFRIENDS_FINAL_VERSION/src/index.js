//React is the View Library
import React from 'react';
//Redux 
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
//It's is used For Websites
import ReactDOM from 'react-dom';
import './index.css';
import App from'./Containers/App';
//Service Worker makes our app fast and work offline
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//import Reducer searchRobots
import { searchRobots,requestRobots } from './reducers';
//Destructure {robots} if not default , Used to grab multiple values
// import { robots } from './robots';
import { createLogger } from 'redux-logger';
//Redux thunk - For Async JS, middleware that waits  if any action returns fuction instead of an objects
import thunkMiddleware from 'redux-thunk';

//WORKING PROCESS (REDUX)
//Action -> Middleware(if any) -> Reducer -> Store( Has State(s)) ->React (Make Changes)

//Logger - Middleware : Logs all the Actions
const logger=createLogger();

//Reducer
const rootReducer=combineReducers({searchRobots,requestRobots});

//Store : Stores states; It uses the Reducer to do so
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
