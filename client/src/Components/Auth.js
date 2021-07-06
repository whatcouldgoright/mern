import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  handleLogin = async googleData => {
    console.log('googleData: ' + JSON.stringify(googleData, null, 2))
    const res = await fetch("/api/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    this.setState({ user: data })
    console.log('user data: ' + JSON.stringify(data, null, 2));
    // store returned user somehow
  }

  componentDidMount() {
    // axios
    //   .get('/api/thoughts/')
    //   .then(res => this.setState({ thoughts: res.data }))
    //   .catch(alert);
  }

  render() {
    // const { thoughts } = this.state;

    return (
      <div className="Auth">
        <p>Auth</p>
        <GoogleLogin
          clientId='749218219448-s9jiqcnf7upjlf57q2ibcmaqo8pucjpp.apps.googleusercontent.com'
          buttonText="Log in with Google"
          onSuccess={this.handleLogin}
          onFailure={this.handleLogin}
          cookiePolicy={'single_host_origin'}
        />
        <p>{this.state.user ? this.state.user.name : 'no user'}</p>
      </div>
    );
  }
}

export default Auth;


