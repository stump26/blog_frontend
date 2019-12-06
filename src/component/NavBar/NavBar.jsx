import React, { useContext } from 'react';
import {
  AppBar,
  Typography,
  Input,
  Switch,
  Link,
  Avatar,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { DarkModeContext } from '../../context';
import './NavBar.scss';

const DarkSwitch = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const NavButtons = () => {
  const githubURL = 'https://github.com/stump26';
  const instaURL = 'https://www.instagram.com/stumpark_26/';
  const DSMURL = 'https://stumpark.com:5001';
  const githubProfileIMG = 'https://avatars2.githubusercontent.com/u/13835452';
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className="Nav-Button-group">
      <Typography id="Nav-Color-switch">
        L<DarkSwitch onChange={toggleDarkMode} checked={darkMode} />D
      </Typography>
      <Link href="/aboutMe">
        <Typography id="Nav-Link">AboutMe</Typography>
      </Link>
      <Link href={instaURL}>
        <Typography id="Nav-Link">Instagram</Typography>
      </Link>
      <Link href={DSMURL}>
        <Typography id="Nav-Link">DSM</Typography>
      </Link>
      <Link href={githubURL}>
        <Avatar alt="Stump26" src={githubProfileIMG} id="Nav-Profile" />
      </Link>
    </div>
  );
};

const NavBar = () => {
  const history = useHistory();
  return (
    <AppBar id="Nav-Bar">
      <Typography
        variant="h5"
        className="Nav-logo"
        onClick={() => {
          history.push('/');
        }}
      >
        StumPark
      </Typography>
      <Input className="Nav-Search-Bar" />
      <NavButtons />
    </AppBar>
  );
};

export default NavBar;
