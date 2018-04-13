import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Logout from './componentes/Logout';
import Login from './componentes/Login';
import registerServiceWorker from './registerServiceWorker';
import './css/timeline.css';
import './css/login.css';
import {Router,Route,browserHistory} from 'react-router';

function verificaAutenticacao(nextState, replace) {
    if(localStorage.getItem('auth-token') === null){
        replace('/?msg=você precisa estar logado para acessar o endereço');
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="/timeline" component={App} onEnter={verificaAutenticacao}/>
        <Route path="/logout" component={Logout}/>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
