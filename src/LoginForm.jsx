import React, { Component } from 'react';

class LoginForm extends Component{
 
  constructor(props){
      super(props);

      this.state={
          userName: '',
          password: ''
      }
  }

//    validateForm = (userName, password) => {
//     return userName.length>0 && password.length>0;
// }
  forUsername= e => {
      this.setState(
          {
              userName: e.target.value
          }
      )
  }

  forPassword= e => {
      this.setState(
          {
              password: e.target.value
          }
      )
  }


  toLogin= () =>
  (
   this.props.history.push(("/Data"), 
   {userName: this.state.userName, password: this.state.password})
  )
 
    render() {
        return(
            <div>
                <span style={{color:'red'}}><b>Please login!</b></span><br />
                <span>User Name:</span>&nbsp;
                <input type="text" 
                placeholder="username" 
                onChange={this.forUsername} 
                value={this.state.userName} required/><br />

                <span>Password&nbsp;&nbsp;&nbsp;:&nbsp;</span>
                <input type="text" 
                placeholder="password" 
                onChange={this.forPassword} 
                value={this.state.password} required/><br /><br />
                
                <button style={{color: 'blue'}} 
                onClick={this.toLogin}>Login</button>
            </div>
        )
    }
}

export default LoginForm

// import React, { useState } from 'react';

// export default function LoginForm(props) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     function validateForm() {
//         return username.length>0 && password.length>0;
//     }

//     function hangleSubmit(e) {
//         e.preventDefault();
//         this.props.history.push("/Data")
//     }

//     return (
//         <div className="login">
//             <form onSubmit={hangleSubmit}>
//                 <label>User Name</label>
//                 <input type="username" 
//                 placeholder="Enter username" 
//                 value={username} 
//                 onChange={e => setUsername(e.target.value)} /> <br />
                
//                 <label>Password</label>
//                 <input type="password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)} /> <br />

//                 <button color="primary" type="submit" disabled={!validateForm()}>Login</button>
//             </form>
//         </div>
//     )
// }