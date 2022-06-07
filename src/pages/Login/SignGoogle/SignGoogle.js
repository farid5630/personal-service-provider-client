import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SignGoogle = () => {
  const [signInWithGoogle, user, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubloading, githuberror] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handlegoogleSignIn = () => {
    signInWithGoogle();
  };
  const handleGithubSignIn = () => {
    signInWithGithub();
  };
  // if (googleloading || githubloading) {
  //   <Loading></Loading>;
  // }
  // if (googleerror || githuberror) {
  //   return toast("you are not Sign in!");
  // }
  if (user || githubUser) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      {/* <ToastContainer /> */}
      <img
        onClick={handlegoogleSignIn}
        className="d-block mb-3 w-50 "
        src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
        alt=""
      />
      <br />
      <img
        onClick={handleGithubSignIn}
        className="d-block  w-50 "
        src="https://coderwall-assets-0.s3.amazonaws.com/uploads/picture/file/4363/github.png"
        alt=""
      />
    </div>
  );
};

export default SignGoogle;
