import React, { Component } from 'react';
import firebase from '../firebase';
import MainNote from './MainNote';
import './Login.css'

class Login extends Component
{
    
    constructor()
    {
        super();
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: '',
           status: '', 
              uid:''     ,
            error:'',
          loading:false  };
    }
    
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      login = (e) => {
        this.setState({
          loading: true
        });
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u)=>{
      
          this.setState({status : 'LoggedIn', uid: u.user.uid
        ,loading: false}); })
          .catch((error) => {
            console.log(error)
            
              this.setState({error:error.message , status:'denied',
              loading: false}
          );
      })

      }

      signup = (e) =>{
        this.setState({
          loading: true
        });
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{this.setState({status : 'LoggedIn',
      loading:false});
        
        })
        .catch((error) => {
            console.log(error);
            this.setState({error :error.message, status:'denied',
              loading: false})
          })
      }

    render(){
        return(
            <div >

           
       <div className="mainClass">
       <form>
      <div className="innerClass">
       <label className="labelName">Email address</label>
       <input className="inputField" value={this.state.email} onChange={this.handleChange} type="email" name="email"  aria-describedby="emailHelp" placeholder="Enter email" />
       {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
       <div className= "innerClass">
      <label className="labelName">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="inputField" id="exampleInputPassword1" placeholder="Password" style={{marginLeft:"25px"}}/>
      </div>
      <div className= "innerClass">

      <button  type="submit" onClick={this.login} >Login</button>
      <button onClick={this.signup} style={{marginLeft: '25px'}}>Signup</button>
      </div>
 </form>
 
 </div>

{
 this.state.loading ? <p> Logging in</p> :

this.state.status == 'LoggedIn'?

<MainNote uid = {this.state.uid}/> : <p>{this.state.error}</p>
 }
 </div>
    
        );
    }
   
}

export default Login;