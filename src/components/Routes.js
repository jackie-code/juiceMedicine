import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Welcome from './Welcome';
import CreateJuice from './CreateJuice';

function Routes() {
    return(
      <Switch>
          {/* we created different routes */}
          <Route path="/" exact component={Welcome}/>
          <Route path="/create-juice" component={CreateJuice}/>
      </Switch>  
    );
}

export default Routes;