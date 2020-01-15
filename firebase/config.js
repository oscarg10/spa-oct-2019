//This import looks different because it is not exporting anything out. The main purpose is to fire the ../env.js
import "../env.js";

export default {
  apiKey: `${process.env.FIREBASE_API}`,
  authDomain: "savvy-practice-fafea.firebaseapp.com",
  databaseURL: "https://savvy-practice-fafea.firebaseio.com",
  projectId: "savvy-practice-fafea",
  storageBucket: "savvy-practice-fafea.appspot.com",
  messagingSenderId: "210023651476",
  appId: "1:210023651476:web:0d61f16b3821e934c1fc81"
};
