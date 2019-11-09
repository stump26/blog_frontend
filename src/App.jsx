import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import ApolloClient from './apolloClient';
import { Home, Editor, Post } from './pages';
import { DarkModeContext } from './context.js';
import NavBar from 'component/NavBar';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const actions = {
    toggleDarkMode: async () => {
      console.log('toggle_mode');
      setDarkMode(!darkMode);
      localStorage.setItem('isDark', !darkMode);
    },
  };
  // componentDidMount
  useEffect(() => {
    const historyDark = localStorage.getItem('isDark');
    console.log('TCL: App -> historyDark', historyDark);
    if (historyDark === 'true') {
      console.log('load localstorage');
      setDarkMode(true);
    } else if (
      (historyDark === undefined || historyDark === null) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      console.log('load prefers-color-scheme');
      setDarkMode(true);
    }
  }, []);
  // componentDidUpdate
  useEffect(() => {
    document
      .getElementsByTagName('body')[0]
      .classList.toggle('dark-mode', darkMode);
  });

  return (
    <ApolloProvider client={ApolloClient}>
      <BrowserRouter>
        <DarkModeContext.Provider value={{ darkMode, ...actions }}>
          <div className="App">
            <NavBar />
            <>
              <Route exact path="/" component={Home} />
              <Route exact path="/Editor" component={Editor} />
              <Route exact path="/post/:id" component={Post} />
            </>
          </div>
        </DarkModeContext.Provider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
