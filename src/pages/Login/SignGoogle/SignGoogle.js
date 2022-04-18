import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignGoogle = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    return (
      <div>
            <button onClick={()=> signInWithGoogle()}className="btn btn-primary d-block mb-4">Sign in Google</button>
        <button onClick={()=> signInWithGithub()} className="btn btn-primary d-block">Sign in Github</button>
      </div>
    );
};

export default SignGoogle;