import React from 'react';
import { setupProviderAndRender } from './provider/provider';
import App from './App';

// Custom css
import './assets/scss/index.scss';

setupProviderAndRender(<App/>);