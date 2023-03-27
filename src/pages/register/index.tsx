import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "app/hooks";
import { useNavigate } from "react-router-dom";

import {
  registerHome,
  registerHomeFailure,
  registerHomeSuccess,
  selectIsRegistered
} from "features/register/registerSlide";
import { Navigate } from "react-router-dom";

export interface RegisterPageProps {}
export default function RegisterPage(props: RegisterPageProps) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isRegistered = useAppSelector(selectIsRegistered);
  const navigate = useNavigate();


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const isFormValid = email !== "" && password !== "" && name !== "";

  const handleRegisterFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const IDR = {
      email: email,
      password: password,
      name: name,
    };
    console.log(IDR);
    if (isFormValid) {
      dispatch(registerHome(IDR));
      if (isRegistered === true ){
        navigate('/login');
      } else navigate('/register')
    } else {
      // dispatch(registerHomeFailure);
    }
  };

  return (
    <>
      <div>
        <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-violet-400 to-fuchsia-400">
          <div className="text-center ">
            <img
              className="h-20 w-40 m-auto"
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
              alt=""
            />
            <div className="h-sigup w-96 shadow-2xl bg-white rounded-sm shadow-black">
              <p className="text-slate-400 pt-10 font-bold">
                Sign up for your account
              </p>
              <form onSubmit={handleRegisterFormSubmit}>
                <input
                  type="name"
                  onChange={handleNameChange}
                  className="h-10 w-80 rounded p-2 border-2 mt-6 border-slate-200 focus:outline-sky-400"
                  placeholder="Enter name"
                />
                <input
                  type="email"
                  onChange={handleEmailChange}
                  className="h-10 w-80 rounded p-2 border-2 mt-6 border-slate-200 focus:outline-sky-400"
                  placeholder="Enter email"
                />

                <br />
                <input
                  type="password"
                  onChange={handlePasswordChange}
                  className="h-10 w-80 p-2 rounded border-2 mt-6 border-slate-200 focus:outline-sky-400"
                  placeholder="Enter password"
                />
                <div className="inline-block h-24 text-left w-80 text-sm mt-10">
                  <span className="">
                    By clicking “Continue” below, you agree to the Atlassian
                  </span>
                  <a href="" className="underline text-blue-400 ml-1">
                    Cloud Terms of Service
                  </a>
                  <span> and acknowledge the </span>
                  <a href="" className="underline text-blue-400">
                    Privacy Policy.
                  </a>
                </div>
                <button
                  className={`h-10 w-80 bg-sky-400 mt-6 text-white rounded font-bold${
                    !isFormValid ? "opacity-90 cursor-not-allowed" : ""
                  }`}
                  disabled={!isFormValid}
                >
                  Continue
                </button>
              </form>
              <br />

              <div className="hover:underline text-sm text-blue-500 mt-3">
                <a href="/login" className="">
                  Already have an account? Log In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
