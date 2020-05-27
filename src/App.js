import React, { Component } from 'react';
import Card from './components/Card';
import MyLoader from './components/MyLoader';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadingPage: false
    }
  }

componentDidMount(){
  setTimeout(() => {
    this.setState({loadingPage: true})
  }, 1200);
}

render() {
  return (
    <div>
      {!this.state.loadingPage ? <MyLoader/> : <Card/>}
  
    </div>
  )
}

}

export default App;

