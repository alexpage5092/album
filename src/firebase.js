import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAw5y4368FNpfKE7lOh-LjyXrotjjSKifU",
  authDomain: "album-81780.firebaseapp.com",
  databaseURL: "https://album-81780.firebaseio.com",
  projectId: "album-81780",
  storageBucket: "album-81780.appspot.com",
  messagingSenderId: "123722583737",
  appId: "1:123722583737:web:013d31bdf69a1facdfd568",
  measurementId: "G-JFE60HW855"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();

export const storage = firebase.storage();

export function snapshotToArray(snapshot) {
  const updated_array = [];
  snapshot.forEach(s => {
    const data = s.data();
    data.id = s.id;
    updated_array.push(data);
  });
  return updated_array;
}
