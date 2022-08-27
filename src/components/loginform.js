import React from 'react';

export default class LoginForm extends React.Component {
  render () {
    return (

        <form className="container">
          <h3 className="container1 bg-warning">Login</h3>
          <br></br>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control"/>
          </div>
          <br></br>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control"/>
          </div>
          <br></br>
          <br></br>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
    )
  };
}