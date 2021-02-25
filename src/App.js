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
import AboutMe from './pages/Profile/AboutMe';
import Favourites from './pages/Profile/Favourites';
import Friends from './pages/Profile/Friends';
import MadeIt from './pages/Profile/IMadeIt';
import MyPhotos from './pages/Profile/MyPhotos';
import MyReviews from './pages/Profile/MyReviews';
import PersonalRecipes from './pages/Profile/PersonalRecipes';

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

          <Route exact path="/profile/about-me" 
            render={() => currentUser ? (
            <AccountPageLayout>
              <AboutMe />
            </AccountPageLayout> ):
            (
            <AccountPageLayout>
              <SignUp />
            </AccountPageLayout>
          )} />

          <Route exact path="/profile/favourites" 
            render={() => currentUser ? (
            <AccountPageLayout>
              <Favourites />
            </AccountPageLayout> ):
            (
            <AccountPageLayout>
              <SignUp />
            </AccountPageLayout>
          )} />

          <Route exact path="/profile/friends" 
            render={() => currentUser ? (
            <AccountPageLayout>
              <Friends />
            </AccountPageLayout> ):
            (
            <AccountPageLayout>
              <SignUp />
            </AccountPageLayout>
          )} />

          <Route exact path="/profile/made-it" 
            render={() => currentUser ? (
            <AccountPageLayout>
              <MadeIt />
            </AccountPageLayout> ):
            (
            <AccountPageLayout>
              <SignUp />
            </AccountPageLayout>
          )} />

          <Route exact path="/profile/my-photos" 
            render={() => currentUser ? (
            <AccountPageLayout>
              <MyPhotos />
            </AccountPageLayout> ):
            (
            <AccountPageLayout>
              <SignUp />
            </AccountPageLayout>
          )} />

          <Route exact path="/profile/my-reviews" 
            render={() => currentUser ? (
            <AccountPageLayout>
              <MyReviews />
            </AccountPageLayout> ):
            (
            <AccountPageLayout>
              <SignUp />
            </AccountPageLayout>
          )} />

          <Route exact path="/profile/my-recipes" 
            render={() => currentUser ? (
            <AccountPageLayout>
              <PersonalRecipes/>
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
