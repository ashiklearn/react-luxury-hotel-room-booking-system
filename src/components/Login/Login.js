import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';




const Login = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
  
    var credential = result.credential;

    
    var token = credential.accessToken;
   
    const{displayName,email} = result.user;
    const signedInUser ={name:displayName,email}
    setLoggedInUser(signedInUser);
    history.replace(from);
   
  }).catch((error) => {
    const errorMessage = error.message;
   console.error(errorMessage);
  });

    }
    return (
        <div>
            <h1> This is Login </h1>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;