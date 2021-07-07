import React from 'react';
import {useLocation} from 'react-router-dom';
import ForgetPasswordFirebase from './ForgetPasswordFirebase';
import ForgetPasswordAwsCognito from './ForgetPasswordAwsCognito';
import ForgetPasswordJwtAuth from './ForgetPasswordJwtAuth';

const ForgetPassword = () => {
  const location = useLocation();

  const tab = (location.state && location.state.tab) || 'firebase';

  return (
    <>
      {tab === 'firebase' && <ForgetPasswordFirebase />}
      {tab === 'awsCognito' && <ForgetPasswordAwsCognito />}
      {tab === 'jwtAuth' && <ForgetPasswordJwtAuth />}
    </>
  );
};

export default ForgetPassword;
