import firebase from "firebase"
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