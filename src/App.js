import React, {Component} from 'react';
import './App.css';
import MyNavBar from './Components/NavBar/Navbar';
import CardBanner from './Components/cardBanner/cardBanner';
import SocialBanner from './Components/socialBanner/socialBanner';
import Postagens from './Components/postBanner/postBanner';
import MyFooter from './Components/Footer/Footer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header>
          <MyNavBar></MyNavBar>
        </header>
        <main>
          <CardBanner></CardBanner>
        </main>
        <Postagens></Postagens>
        <SocialBanner></SocialBanner>
        <footer>
          <MyFooter></MyFooter>
        </footer>
      </div>
    );
  }
}

export default App;
