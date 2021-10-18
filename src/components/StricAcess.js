import React from 'react';
import { Redirect } from 'react-router';

class StrictAcess extends React.Component {
  render() { 
    const {username, password} = this.props.user;
    if(!(username==='joao' && password==='1234')){
      alert("Acess denied")
      return <Redirect to='/' />
    }
    return <p>Welcome Joao!</p>
  }
}
 
export default StrictAcess;