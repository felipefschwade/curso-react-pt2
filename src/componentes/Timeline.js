import React, { Component } from 'react';
import FotoItem from './FotoItem';
import Pubsub from 'pubsub-js';
import TimelineApi from '../store/TimeLineApi';

export default class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state={
      fotos:[]
    };
    this.login = this.props.login;
  }

  componentWillMount(){
    this.props.store.subscribe(() => {
      this.setState({fotos:this.props.store.getState().TimelineReducer}); 
    });
  }

  carregaFotos(){  
    let urlPerfil;

    if(this.login === undefined) {
      urlPerfil = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
    } else {
      urlPerfil = `http://localhost:8080/api/public/fotos/${this.login}`;
    }
    this.props.store.dispatch(TimelineApi.lista(urlPerfil));
  }

  like(fotoId) {
    this.props.store.dispatch(TimelineApi.like(fotoId));
  }

  comenta(fotoId,textoComentario) {
    this.props.store.dispatch(TimelineApi.comenta(fotoId, textoComentario));
  }


  componentDidMount() {
    this.carregaFotos()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== undefined) {
      this.login = nextProps.login;
      this.carregaFotos();
    }
  }

  render(){
    return (
      <div className="fotos container">
        {
          this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto} like={this.like.bind(this)} comenta={this.comenta.bind(this)}/>)
        }
      </div>            
    );
  }
}