import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Logout from './componentes/Logout';
import Login from './componentes/Login';
import registerServiceWorker from './registerServiceWorker';
import './css/timeline.css';
import './css/login.css';
import {Router,Route,browserHistory} from 'react-router';
import {matchPattern} from 'react-router/lib/PatternUtils';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {TimelineReducer} from './reducers/TimelineReducer'
import {HeaderReducer} from './reducers/HeaderReducer'
import {Provider} from "react-redux";

const reducers = combineReducers({TimelineReducer,HeaderReducer})
const store = createStore(reducers,applyMiddleware(thunkMiddleware));

function verificaAutenticacao(nextState, replace) {
    const resultado = matchPattern('/timeline(/:login)',nextState.location.pathname);
    const enderecoPrivadoTimeline = resultado.paramValues[0] === undefined;  

    if(enderecoPrivadoTimeline && localStorage.getItem('auth-token') === null){
        replace('/?msg=você precisa estar logado para acessar o endereço');
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Login}/>
            <Route path="/timeline(/:login)" component={App} onEnter={verificaAutenticacao}/>
            <Route path="/logout" component={Logout}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
