import firebase from "firebase/app"
import 'firebase/firestore'
const FireBaseConfig = firebase.initializeApp({
    apikey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messageSenderId: "",
    apiId: "",

});

export { FireBaseConfig as firebase }