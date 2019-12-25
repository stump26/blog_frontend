import React, { useState, useContext } from 'react';
import {
  AppBar,
  Typography,
  Input,
  Switch,
  Link,
  Avatar,
  useMediaQuery,
  Button,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { DarkModeContext } from '../../context';
import './NavBar.scss';

const GithubLinkBtn = () => {
  const githubURL = 'https://github.com/stump26';
  const githubProfileIMG = 'https://blog.stumpark.com/img/stumpark/logo64.jpg';
  return (
    <Link href={githubURL}>
      <Avatar alt="Stump26" src={githubProfileIMG} className="Nav-Profile" />
    </Link>
  );
};

const ButtonList = () => {
  const instaURL = 'https://www.instagram.com/stumpark_26/';
  const DSMURL = 'https://stumpark.com:5001';

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <Typography id="Nav-Color-switch" className="menuBtnItem">
        L<Switch onChange={toggleDarkMode} checked={darkMode} />D
      </Typography>
      <Link href="/aboutMe" className="menuBtnItem">
        <Typography id="Nav-Link">AboutMe</Typography>
      </Link>
      <Link href={instaURL} className="menuBtnItem">
        <Typography id="Nav-Link">Instagram</Typography>
      </Link>
      <Link href={DSMURL} className="menuBtnItem">
        <Typography id="Nav-Link">DSM</Typography>
      </Link>
    </>
  );
};

const NavButtonsFully = () => {
  return (
    <div className="Nav-Button-group">
      <ButtonList />
      <GithubLinkBtn />
    </div>
  );
};

const NavHamburgerMenu = ({ handleMenuShowing }) => {
  return (
    <div className="Nav-Button-group">
      <Button className="Nav-MenuBtn" onClick={handleMenuShowing}>
        <MenuIcon />
      </Button>
      <GithubLinkBtn />
    </div>
  );
};

const NavBar = () => {
  const history = useHistory();
  const isWidthOverTablet = useMediaQuery('(min-width:1000px)');
  const isWidthOverMobile = useMediaQuery('(min-width:640px');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuShowing = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Width > 1000px
  const isDesktop = isWidthOverTablet && isWidthOverMobile;

  // 폭이넓은경우 메뉴가 열려있다면 닫히도록 설정.
  if (isDesktop && isMenuOpen) {
    setIsMenuOpen(false);
  }

  return (
    <>
      <AppBar className="Nav-APPBar">
        <div className="Nav-Bar-First">
          <Typography
            variant="h5"
            className="Nav-logo"
            onClick={() => {
              history.push('/');
            }}
          >
            StumPark
          </Typography>

          {/* Mobile에서는 검색바를 x */}
          {isWidthOverMobile && <Input className="Nav-Search-Bar" />}

          {isDesktop ? (
            <NavButtonsFully />
          ) : (
            <NavHamburgerMenu handleMenuShowing={handleMenuShowing} />
          )}
        </div>
        <div className={`Nav-DropDown-List ${!isDesktop && isMenuOpen ? 'Nav-DropDown-Open' : ''}`}>
          <ButtonList />
        </div>
      </AppBar>
    </>
  );
};

export default NavBar;
