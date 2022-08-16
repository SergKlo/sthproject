import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

    root.render(
      <Router>
        <React.StrictMode>
            <App
                  // state={state}
                  // dispatch={store.dispatch.bind(store)}
                  store={store} />
        </React.StrictMode>
      </Router>
)}

rerenderEntireTree(
  // store.getState()
  );

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state)
// })




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();