import React, {Component} from 'react';
import './App.css';
import MyNavBar from './Components/Navbar';
import CardBanner from './Components/cardBanner';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header>
        <MyNavBar></MyNavBar>
        <CardBanner></CardBanner>
        </header>
       
      </div>
    );
  }
}

export default App;
