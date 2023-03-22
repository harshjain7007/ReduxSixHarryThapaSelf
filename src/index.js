import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// with ToolKit sixPack
import { Provider } from 'react-redux';
import store from './sixPackReduxToolkit/store';

// with harry
// import { Provider } from 'react-redux';
// import { store } from './state/store';

// with thapa
// import store from './thapa/store';
// import { Provider } from 'react-redux';
// store.subscribe(() => console.log(store.getState()));

/// SELF 
// import store from './selfRduex/store';
// import { Provider } from 'react-redux';
// store.subscribe(() => console.log(store.getState()));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
