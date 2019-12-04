import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Typography, Button } from '@material-ui/core';
import qs from 'querystring';
import { useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';

import './SignIn.scss';

const SignIn = () => {
  const [inputEmail, setInputEmail] = useState();
  const [inputPW, setInputPW] = useState();
  const [isSigninLoading, setIsSigninLoading] = useState(false);
  const history = useHistory();

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleinputPW = (e) => {
    setInputPW(e.target.value);
  };
  const handleSubmit = async () => {
    setIsSigninLoading(true);
    const opt = {
      method: 'post',
      url:
        process.env.REACT_APP_BACKEND_HOST +
        ':' +
        process.env.REACT_APP_BACKEND_PORT +
        '/signin',
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
        const { data } = res;
        // console.log('TCL: handleSubmit -> data', data);
        sessionStorage.setItem('token', data.token);
        alert(`Wellcome, ${data.user.username}`);
        history.goBack();
      })
      .catch(({ response }) => {
        if (response.status === 400) {
          if (response.data === 'nulluser') {
            alert('존재하지 않는 Email입니다.');
          } else if (response.data === 'wrongpass') {
            alert('비밀번호가 잘못되었습니다.');
          }
          setIsSigninLoading(false);
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
      />
      <TextField
        id="filled-password"
        label="password"
        className="input-password"
        type="password"
        margin="normal"
        variant="filled"
        onChange={handleinputPW}
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
