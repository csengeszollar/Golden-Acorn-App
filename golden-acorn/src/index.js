// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import SimpleGoldenAcornApp from './components/SimpleGoldenAcornApp';
import { createStore } from "redux"
import { Provider } from "react-redux"

const initialState = {
  count: 0
}

function reducer(state = initialState, action){
  switch (action.type) {
    case 'BUY_ACORN': 
        return {count: state.count + 1}
    case 'EAT_ACORN': 
        // ne menjen 0 ala:
        return {count: Math.max(state.count - 1, 0)}
    
    default: 
        return state;
    
}
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  {/* <h1>Hello, Green Fox Academy!</h1> */}
  <SimpleGoldenAcornApp></SimpleGoldenAcornApp>
  </Provider>,
  document.getElementById('root'),
);
