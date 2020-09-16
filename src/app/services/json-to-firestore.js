const firebaseConfig = {
  apiKey: "AIzaSyDmm6kNC4YFmBzmfVO1daqXURVgUFIiuIg",
  authDomain: "musik-lib.firebaseapp.com",
  databaseURL: "https://musik-lib.firebaseio.com",
  projectId: "musik-lib",
  storageBucket: "musik-lib.appspot.com",
  messagingSenderId: "871817499684",
  appId: "1:871817499684:web:de2b2514cc7284cf84b4b1",
  measurementId: "G-8M2HFYLDFV"
};
const albums = require('./albums.json');
const firebase = require('firebase');

require('firebase/firestore');
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

albums.forEach(function (obj) {
  db.collection("albums")
    .add({
      name: obj.name,
      band: obj.band,
      genre: obj.genre,
      label: obj.label,
      producer: obj.producer,
      releaseDate: new Date(obj.releaseDate)
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});