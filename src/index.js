import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/store/store'
import { Layout } from './Pages/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

