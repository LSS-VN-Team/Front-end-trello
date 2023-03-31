import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { loginHome } from "features/login/loginSlide";
import { useNavigate, Link } from "react-router-dom";

interface LoginPageProps {}
export default function LoginPage(props: LoginPageProps) {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const isFormValid = email !== "" && password !== "";

  const handleLoginFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const ID = {
      email: email,
      password: password,
      Navigate: navigate,
    };

    if (isFormValid) {
      dispatch(loginHome(ID));
    } 
  };
  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-violet-400 to-fuchsia-400">
        <div className="text-center ">
          <img
            className="h-20 w-40 m-auto"
            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
            alt=""
          />
          <div className="h-96 w-96 shadow-2xl bg-white rounded-sm	shadow-black ">
            <p className="text-slate-400 pt-10 font-bold">Log in to Trello</p>
            <input
              value={email}
              onChange={handleEmailChange}
              aria-describedby="helper-text-explanation"
              name="email"
              type="email"
              className="h-10 w-80 pl-2 rounded border-2 mt-6 border-slate-200 focus:outline-lime-600"
              placeholder="Enter email"
            />
            <br />{" "}
            <form onSubmit={handleLoginFormSubmit}>
              <input
                name="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                aria-describedby="helper-text-explanation"
                className="h-10 w-80 rounded pl-2 border-2 mt-6 border-slate-200 focus:outline-lime-600"
                placeholder="Enter password"
              />
              <button
                className={`h-10 w-80 bg-lime-600 mt-6 text-white rounded font-bold${
                  !isFormValid ? "opacity-90 cursor-not-allowed" : ""
                }`}
                disabled={!isFormValid}
              >
                Continue
              </button>
            </form>
            <br />
            <div className=" text-sm text-blue-500 mt-16">
              <Link to="" className="hover:underline">
                Can't log in?
              </Link>
              <Link to="/register" className="hover:underline ml-2">
                Sign up for an account{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
