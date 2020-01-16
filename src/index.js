import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import promise from 'redux-promise'; //Usado para garantir a promessa de uma chamada assíncrona
import multi from 'redux-multi'; //Usado para chamar outra action a partir de uma em execução
import thunk from 'redux-thunk'; //Usado para sequenciar as chamadas das actions


import rootReducer from './main/rootReducer';
import * as serviceWorker from './serviceWorker';

import AuthOrApp from './main/authOrApp'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/**
 * Aplicando o middleware para que e assim garantindo o retorno de operações baseadas em promessas
 */
const store = applyMiddleware(multi, promise, thunk)(createStore)(rootReducer, devTools);

ReactDom.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>
, document.getElementById('app'))


serviceWorker.unregister();
