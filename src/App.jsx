import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

import { DarkModeContext, UserInfoContext } from './context.js';
import NavBar from './component/NavBar/';
import Footer from './component/Footer/';
import './App.scss';
import { ssrEnabled } from './lib/util';
import PageRouter from './Router';

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
      const token = ssrEnabled ? null : sessionStorage.getItem('token');
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
    if (historyDark === 'true') {
      setDarkMode(true);
    } else if (
      (historyDark === undefined || historyDark === null) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
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
            <PageRouter />
            <Footer />
          </div>
        </UserInfoContext.Provider>
      </DarkModeContext.Provider>
    </>
  );
};
