import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './default.scss';
//Components

//Layouts
import HomepageLayout from './layouts/HomepageLayout';
import AccountPageLayout from './layouts/AccountPageLayout';

//Pages
import Homepage from './pages/Homepage';
import SignUp from './pages/Account/SignUp';
import SignIn from './pages/Account/SignIn';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} />

        <Route exact path="/signup" render={() => (
          <AccountPageLayout>
            <SignUp />
          </AccountPageLayout>
        )} />

        <Route exact path="/signin" render={() => (
          <AccountPageLayout>
            <SignIn />
          </AccountPageLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
