import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Screen from './Screens/Screen/Screen';
import Screens from './Screens/screens';
import Tasks from './Tasks/Tasks';

class App extends Component {

  state = {
    userName: 'Tori',
    currentScreen: 0,
    screens: Screens,
    loading: false
  }

  navToNextScreen = () => {
    const { currentScreen } = this.state;
    this.setState({ currentScreen: currentScreen + 1 })
  }

  regFinish = () => {
    alert('Registration has been completed.');
  }

  render() {
    const { currentScreen, screens } = this.state;

    return (
      <BrowserRouter>
        <div className="App">

          <Screen
            key={screens[currentScreen].id}
            currentScreen={currentScreen}
            screens={screens}
            next={this.navToNextScreen}
            regFinish={this.regFinish}
          />

          <Tasks />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
