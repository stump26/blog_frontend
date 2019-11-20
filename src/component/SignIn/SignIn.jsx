import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Typography, Button } from '@material-ui/core';
import qs from 'querystring';
import { useHistory } from 'react-router-dom';

import './SignIn.scss';

const SignIn = () => {
  const [inputEmail, setInputEmail] = useState();
  const [inputPW, setInputPW] = useState();
  const history = useHistory();

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleinputPW = (e) => {
    setInputPW(e.target.value);
  };
  const handleSubmit = async () => {
    const opt = {
      method: 'post',
      url: process.env.REACT_APP_BACKEND_HOST + '/signin',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        email: inputEmail,
        password: inputPW,
      }),
    };
    try {
      axios(opt).then((res) => {
        const { data } = res;
        console.log('TCL: handleSubmit -> data', data);
        sessionStorage.setItem('token', data.token);
        alert(`Wellcome, ${data.user.username}`);
        history.goBack();
      });
    } catch (e) {
      console.error(e);
    }
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
      >
        Sign In
      </Button>
    </div>
  );
};
export default SignIn;
