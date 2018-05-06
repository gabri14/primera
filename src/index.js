import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFontLoader from 'webfontloader';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

WebFontLoader.load({
    google:{
        families: ['Roboto:300,400,500,700','Material Icons']
    }
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
