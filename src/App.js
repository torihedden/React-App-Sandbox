import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import { BrowserRouter } from 'react-router-dom';

import Screen from './Screens/Screen/Screen';
import Screens from './Screens/screens';

import TestComp from './TestComp';

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
    const { userName, currentScreen, screens } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          {/* <Header name={userName}/> */}

          <TestComp>
            <div>test div</div>
            <p>test paragraph</p>
          </TestComp>

          <Screen
            key={screens[currentScreen].id}
            currentScreen={currentScreen}
            screens={screens}
            next={this.navToNextScreen}
            regFinish={this.regFinish}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// updateUserName = (event) => {
//   this.setState({userName: event.target.value})
// }

// deleteProject(index) {
//   // create a copy of the projects array and then mutate that
//   const projects = [...this.state.projects];
//   projects.splice(index, 1);
//   this.setState({projects: projects});
// }
