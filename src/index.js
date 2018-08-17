import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from 'react-redux/es/components/Provider';
import {createStore} from 'redux';
import reducers from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>, document.getElementById('root'));
    
registerServiceWorker();
