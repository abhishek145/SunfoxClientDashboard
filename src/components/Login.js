import React, { Fragment, useState } from 'react';
import { useLoginMutation } from '../store/apis/userApis';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';
import Logo from '../css/assets/logo';
import Bs from '../css/assets/businessicon';
import Pl from '../css/assets/passwordlogo';
function Login() {
  const navigate = useNavigate();
  const [masterKey, setMasterKey] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const res = await login({ masterKey, password }).unwrap();
      console.log(res);

      if (res && res.token) {
        localStorage.setItem('token', res.token);
      }

      navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <center>
        <div className='sunfoxlogo'>
          <Logo />
        </div>
        <div className='showcontent'>
          <div className='heading'>
            <h3>Welcome</h3>
            <p>Please enter your Sunfox business ID to continue</p>
          </div>
        </div>
        <div className='loading'>
          {isLoading ? (
            <>Please Wait.....</>
          ) : (
            <div className='login-box'>
              <div className='input-group'>
                <div className='label'>
                  <label htmlFor='masterkey'>Business ID</label>
                </div>
                <div className='input'>
                  <span>
                    <Bs />
                  </span>
                  <input
                    type='text'
                    id='masterkey'
                    onChange={(e) => {
                      setMasterKey(e.target.value);
                    }}
                    value={masterKey}
                    placeholder='Enter your MasterKey....'
                  />
                </div>
                <div className='label'>
                  <label htmlFor='password'>Password</label>
                </div>
                <div className='input'>
                <span>
                    <Pl />
                  </span>
                  {/* <span>
                    {showPassword ? (
                      <HidePasswordIcon onClick={() => setShowPassword(false)} />
                    ) : (
                      <ShowPasswordIcon onClick={() => setShowPassword(true)} />
                    )}
                  </span> */}
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    placeholder='Enter your Password....'
                  />
                </div>
              </div>
              <div className='button'>
                <button onClick={handleLogin}>Submit</button>
              </div>
            </div>
          )}
        </div>
        <p>
          Forgot Password ? <a href='#'>Click here</a>
        </p>
      </center>
    </>
  );
}

export default Login;
