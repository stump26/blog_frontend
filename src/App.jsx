import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import { Home, Editor, Post, About, Auth } from './pages';
import { DarkModeContext, UserInfoContext } from './context.js';
import NavBar from './component/NavBar/';
import Footer from './component/Footer/';
import './App.scss';

export default () => {
  const [darkMode, setDarkMode] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const darkActions = {
    toggleDarkMode: async () => {
      setDarkMode(!darkMode);
      localStorage.setItem('isDark', !darkMode);
    },
  };
  const userActions = {
    setUserInfoContext: (userInfoDic) => {
      setUserInfo(userInfoDic);
    },
    decodeJWTPayload: () => {
      const token = sessionStorage.getItem('token');
      if (token) {
        const { _id: userId, username, authority } = jwt.decode(token);
        return authority;
      }
      return false;
    },
  };
  // componentDidMount
  useEffect(() => {
    const historyDark = localStorage.getItem('isDark');
    // console.log('TCL: App -> historyDark', historyDark);
    if (historyDark === 'true') {
      // console.log('TCL: load localstorage');
      setDarkMode(true);
    } else if (
      (historyDark === undefined || historyDark === null) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      // console.log('TCL: load prefers-color-scheme');
      setDarkMode(true);
    }
  }, []);
  // componentDidUpdate
  useEffect(() => {
    document.getElementsByTagName('body')[0].classList.toggle('dark-mode', darkMode);
  });
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, ...darkActions }}>
        <UserInfoContext.Provider value={{ userInfo, ...userActions }}>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/editor/:postid" component={Editor} />
              <Route exact path="/editor/" component={Editor} />
              <Route exact path="/post/:id" component={Post} />
              <Route exact path="/aboutMe" component={About} />
              <Route exact path="/auth" component={Auth} />
            </Switch>
            <Footer />
          </div>
        </UserInfoContext.Provider>
      </DarkModeContext.Provider>
    </>
  );
};
