import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import FormField from './Form/Field';
import FormikExample from './Form/FormikExample';

class App extends Component {

  state = {
    name: 'Tori',
    email: '',
    loading: false
  }

  render() {
    const { name, email } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <h3>Formik</h3>
          <FormikExample />

          <h3>Vanilla</h3>
          <form>
            <FormField
              type="text"
              required={true}
              name="name"
              label="Name"
              value={name}/>
            <FormField
              type="email"
              required={true}
              name="email"
              label="Email"
              value={email}/>
            <FormField
              type="submit" />
          </form>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
