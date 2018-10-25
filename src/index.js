import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './font-faces.css';
import './index.css';

ReactDOM.render(
    <BrowserRouter basename={'/type'}>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
