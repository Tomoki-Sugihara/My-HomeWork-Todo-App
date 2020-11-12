import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import App from './components/App';
// import rootReducer from './reducers/index'
// import { Provider } from 'react-redux';

// const store = createStore({reducer: rootReducer})

ReactDOM.render(
   // <Provider store={store}>
   <App />,
   // </Provider>,
   document.getElementById('root')
);
