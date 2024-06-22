import React, { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

const PasswordResetFlow = () => {
  const [token, setToken] = useState(null);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      {!token ? <ForgotPassword setToken={setToken} /> : <ResetPassword token={token} />}
    </div>
  );
};

export default PasswordResetFlow;
