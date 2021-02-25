import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import './default.scss';

//Components

//Layouts
import HomepageLayout from './layouts/HomepageLayout';
import AccountPageLayout from './layouts/AccountPageLayout';

//Pages
import Homepage from './pages/Homepage';
import SignUp from './pages/Account/SignUp';
import SignIn from './pages/Account/SignIn';
import Profile from './pages/Profile';

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
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      this.setState({
        ...initialState
      })
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
  
          <Route exact path="/signup" render={() => currentUser ? <Redirect to="/" /> : (
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

          <Route exact path="/profile" 
            render={() => currentUser ? (
            <AccountPageLayout>
              <Profile />
            </AccountPageLayout> ):
            (
            <AccountPageLayout>
              <SignUp />
            </AccountPageLayout>
          )} />

        </Switch>
      </div>
    );
  }
};

export default App;
