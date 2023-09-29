import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
      });
  };

  return (
    <div className="absolute w-screen justify-between flex ">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className=" float-right mr-10 ">
          <img
            className="w-12 h-12 mt-4 "
            src="https://occ-0-3350-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeeZ_lXhCLhlNGwSD-pFlypYzOc7vo95M2zeHIewNZBwonSs8UquM8VnSASKYr_Vru36vii9Q4D02tOlLAa6Sy0Oi0eDGLs.png?r=59d"
          />

          <button onClick={handleSignOut} className="font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
