/* eslint-disable no-underscore-dangle */
import React, { useState, useContext, useCallback, useRef } from 'react';
import axios from 'axios';
import { TextField, Typography, Button } from '@material-ui/core';
import qs from 'querystring';
import { useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { UserInfoContext } from '../../context';
import { ssrEnabled } from '../../lib/util';
import './SignIn.scss';

const SignIn = () => {
  const [inputEmail, setInputEmail] = useState();
  const [inputPW, setInputPW] = useState();
  const [isSigninLoading, setIsSigninLoading] = useState(false);
  const history = useHistory();
  const { setUserInfoContext } = useContext(UserInfoContext);
  const inputEmailRef = useRef();
  const inputPWRef = useRef();

  const handleInputEmail = useCallback((e) => {
    setInputEmail(e.target.value);
  }, []);

  const handleInputPW = useCallback((e) => {
    setInputPW(e.target.value);
  }, []);

  const clearInput = useCallback(() => {
    setInputEmail('');
    inputEmailRef.current.value = '';
    setInputPW('');
    inputPWRef.current.value = '';
    setIsSigninLoading((prevState) => !prevState);
  }, []);

  const handleSubmit = async () => {
    setIsSigninLoading(true);

    let url = '/signin';
    if (process.env.NODE_ENV === 'production') {
      url = `${process.env.REACT_APP_BACKEND_HOST}/signin`;
    }

    const opt = {
      method: 'post',
      url,
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        email: inputEmail,
        password: inputPW,
      }),
    };

    axios(opt)
      .then((res) => {
        const {
          data: { token, user },
        } = res;
        if (!ssrEnabled) sessionStorage.setItem('token', token);
        setUserInfoContext({
          userId: user._id,
          username: user.username,
          authority: user.authority,
        });
        alert(`Wellcome, ${user.username}`);
        history.goBack();
      })
      .catch(({ response }) => {
        if (response.status === 400) {
          if (response.data === 'nulluser') {
            alert('존재하지 않는 Email입니다.');
          } else if (response.data === 'wrongpass') {
            alert('비밀번호가 잘못되었습니다.');
          }
          clearInput();
        } else {
          alert(response.status, response.data);
          clearInput();
        }
      });
  };
  return (
    <div className="sign-in-box-bg">
      <Typography className="input-form-header" variant="h4">
        Sign In
      </Typography>
      <TextField
        id="filled"
        label="Email"
        className="input-email"
        margin="normal"
        variant="filled"
        onChange={handleInputEmail}
        inputRef={inputEmailRef}
      />
      <TextField
        id="filled-password"
        label="password"
        className="input-password"
        type="password"
        margin="normal"
        variant="filled"
        onChange={handleInputPW}
        inputRef={inputPWRef}
      />
      <Button
        variant="contained"
        color="primary"
        className="button-signin"
        onClick={handleSubmit}
        disabled={isSigninLoading}
      >
        {isSigninLoading && <ReactLoading type="spin" width={30} height={30} />}
        Sign In
      </Button>
    </div>
  );
};
export default SignIn;
