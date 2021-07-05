import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux_store'
import { Provider } from 'react-redux';
import LamaJsApp from './App';

ReactDOM.render(
   <Provider store={store}>
      <LamaJsApp />
   </Provider>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();