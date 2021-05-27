import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import {
  APIKEY,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} from "@env";

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

const app = firebase.initializeApp(firebaseConfig);
app.auth().signInWithEmailAndPassword;
