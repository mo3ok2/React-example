import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import I18n from "redux-i18n"
import './style/index.css';
import App from './containers/App';
import rootReducer from './reducers'
import {translations} from "./static/dictionary"
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import customTheme from './style/theme'


const persistConfig = {
    key: 'root',
    storage,
};

const theme = createMuiTheme(customTheme);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <I18n translations={translations} initialLang="en">
                <PersistGate loading={null} persistor={persistor}>
                    <App/>
                </PersistGate>
            </I18n>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
