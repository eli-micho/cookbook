import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components

//Layouts
import HomepageLayout from './layouts/HomepageLayout';

//Pages
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
