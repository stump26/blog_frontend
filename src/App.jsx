import React, { useState, useEffect } from 'react';

import NavBar from './component/NavBar';
import ArticleList from './component/ArticleList';
import { DarkModeContext } from './context.js';
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
    <div className="App">
      <DarkModeContext.Provider value={{ darkMode, ...actions }}>
        <NavBar />
        <ArticleList />
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
