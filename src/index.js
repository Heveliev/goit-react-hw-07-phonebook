import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import { RotatingLines } from 'react-loader-spinner';

/* <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
