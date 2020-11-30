import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './css/index.css';
import Webfont from 'webfontloader';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './config/authentication';
import './assets/fonts/fonts.css';
import authentication from "./b2c";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function initializeApp(App, store) {

    Webfont.load({
        custom: {
            families: ['SegoeUI', 'Gilroy']
        }
    })

    const history = createBrowserHistory();

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter history={history}>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );

}

authentication.run(async () => {
    const App = await import('./App');

    const store = await import('./store');

    initializeApp(App.default, store.default);
})
