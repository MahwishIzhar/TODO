import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
import Login from './components/Login';
import MainPage from './components/MainPage';



class App extends Component {
  constructor() {
    super();
    this.state = {
      status: '',
    }
  }


  Login = () => {
    this.setState({ status: 'Login' });
  }

 
  render() {
    return (
      <div>

        {
          this.state.status == ''
            ?  <MainPage heading= "TODO app" onClick = {this.Login} />
            : this.state.status == 'Login'
              ? <Login />
              : null
        }



      </div>
    );
  }

}

export default App;
