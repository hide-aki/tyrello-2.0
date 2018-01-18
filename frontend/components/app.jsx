import React from 'react';
import { Provider } from 'react-redux';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';


import SplashPage from './splash_page/splash_page';
import SignupContainer from './signup/signup_container';


import { AuthRoute, ProtectedRoute, UnknownRoute } from '../util/route_util';


const App = () => (
  <div>
    <Switch>
      <AuthRoute path='/signup' component={SignupContainer} />
      <AuthRoute exact path='/' component={SplashPage} />
      <UnknownRoute path='/*' />
    </Switch>
  </div>
);

export default App;