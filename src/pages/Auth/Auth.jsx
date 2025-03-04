import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authStyle from "./SignUp.module.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {ClipLoader} from "react-spinners"
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);

  const navigate = useNavigate()

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name == "signin") {
      // firebase auth
      setLoading({...loading, signIn: true})
      signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({...loading, signIn: false})
        navigate("/")
      })
      .catch((err) => {
        setError(err.message);
        setLoading({...loading, signIn: false})
      });
    } else {
      setLoading({...loading, signUp: true})
      createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({...loading, signUp: false})
        navigate("/")
      })
      .catch((err) => {
        setError(err.message);
        setLoading({...loading, signUp: false})
        });
    }
  };
  return (
    <>
      <section className={authStyle.login}>
        {/* logo */}
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>

        {/* form */}
        <div className={authStyle.login__container}>
          <h1>Sign In</h1>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name=""
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name=""
                id="password"
              />
            </div>
            <button
              type="submit"
              onClick={authHandler}
              name="signin"
              className={authStyle.login__signInButton}
            >
              {loading.signIn ? (
                <ClipLoader color="#fff" size={20} />
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* agreement statement */}
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          {/* create account btn */}
          <button
            type="submit"
            onClick={authHandler}
            name="signup"
            className={authStyle.login__registerButton}
          >
            {" "}
            {loading.signUp ? (
              <ClipLoader color="#fff" size={20} />
            ) : (
              "Create your Amazon Account"
            )}
          </button>
          {error && (
            <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
          )}
        </div>
      </section>
    </>
  );
}

export default Auth;
