import firebase from 'firebase'
import 'firebase/auth' //Importa el servicio de autentificación de Firebase

const firebaseConfig = { //Este es el SDK que hace que se conecte mi pc con el servidor de Firebase, lo saco desde Google Firebase en mi proyecto, mi apps
    apiKey: "AIzaSyAtITp5Nfp-CZqRJLOUp1Ary9FTHi_e_NI",
    authDomain: "cursoreact-5e0a7.firebaseapp.com",
    projectId: "cursoreact-5e0a7",
    storageBucket: "cursoreact-5e0a7.appspot.com",
    messagingSenderId: "844161206265",
    appId: "1:844161206265:web:134bd89b23aaf97626df28",
    measurementId: "G-KZLSDFW9Q2"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const auth = fire.auth() //Con esto en la variable auth tenemos todo el servicio de autentificación

export { auth }