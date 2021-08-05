import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage';
import LoginCliente from './pages/login-cliente/login-cliente';
import LoginFuncionario from './pages/login-funcionario/login-funcionario';
import LoginAdm from './pages/login-adm/login-adm';
import Unidade from './pages/cliente/unidade/unidade';
import Reserva from './pages/cliente/reserva/reserva';
import Header from './components/header/header';
import { auth  } from './firebase/firebase.utils';
import React from 'react';



class App extends React.Component {

  constructor(){
    super();

    this.state ={
      currentUser :null
    }
  }

  unsubscribeFromAuth = null


  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({ currentUser : user});
      console.log(user)
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }



  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login-cliente' component={LoginCliente} />
          <Route exact path='/login-funcionario' component={LoginFuncionario} />
          <Route exact path='/login-administracao' component={LoginAdm} />
          <Route exact path='/unidade' component={Unidade} />
          <Route exact path='/reserva' component={Reserva} />
        </Switch>
      </div>
    );
    
  }

}

export default App;
