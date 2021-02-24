import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth } from './firebase/utils';
import './default.scss';

//Components

//Layouts
import HomepageLayout from './layouts/HomepageLayout';
import AccountPageLayout from './layouts/AccountPageLayout';

//Pages
import Homepage from './pages/Homepage';
import SignUp from './pages/Account/SignUp';
import SignIn from './pages/Account/SignIn';

const initialState = {
  currentUser: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if (!userAuth) {
        this.setState({
          ...initialState
        });
      }

      this.setState({
        currentUser: userAuth
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <HomepageLayout currentUser={currentUser}>
              <Homepage />
            </HomepageLayout>
          )} />
  
          <Route exact path="/signup" render={() => (
            <AccountPageLayout>
              <SignUp />
            </AccountPageLayout>
          )} />
  
          <Route exact path="/signin" 
            render={() => currentUser ? <Redirect to="/" /> : (
            <AccountPageLayout>
              <SignIn />
            </AccountPageLayout>
          )} />
        </Switch>
      </div>
    );
  }
};

export default App;
