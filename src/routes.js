import React, { useEffect } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Check from './pages/check.js';
import Home from './pages/home.js';
import Profile from './pages/profile.js';
import Search from './pages/search.js';
import CreatePost from './pages/home.js';
import Like from './pages/home.js';
import Messenger from './pages/messenger.js';
import Login from './pages/login.js';
import Signup from './pages/signup.js';
import SignupFinal from './pages/signupfinal.js';
import PasswordRecovery from './pages/passwordrecovery.js';
import PasswordRecoveryCode from './pages/passwordrecoverycode.js';
import PasswordRecoveryFinal from './pages/passwordrecoveryfinal.js';

const Routes = () => {
   return (
      <Router>
         <Scene key = 'root' headerShown={false}>
            <Scene key = 'check' component = {Check} initial={true}/>
            <Scene key = 'home' component = {Home} />
            <Scene key = 'messenger' component = {Messenger} />
            <Scene key = 'search' component = {Search} />
            <Scene key = 'createPost' component = {CreatePost} />
            <Scene key = 'like' component = {Like} />
            <Scene key = 'profile' component = {Profile} />
            <Scene key = 'login' component = {Login} />
            <Scene key = 'signup' component = {Signup} />
            <Scene key = 'signupfinal' component = {SignupFinal} />
            <Scene key = 'passwordrecovery' component = {PasswordRecovery} />
            <Scene key = 'passwordrecoverycode' component = {PasswordRecoveryCode} />
            <Scene key = 'passwordrecoveryfinal' component = {PasswordRecoveryFinal} />
         </Scene>
      </Router>
   );
}

export default Routes;