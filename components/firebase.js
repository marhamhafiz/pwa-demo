// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// export default function firebaseInit(){
//     // Your web app's Firebase configuration
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     const firebaseConfig = {
//         apiKey: "AIzaSyBQeOtsH4yYgK9nU0twGW58w1CYcDxlx0I",
//         authDomain: "my-demo-app-a93c7.firebaseapp.com",
//         projectId: "my-demo-app-a93c7",
//         storageBucket: "my-demo-app-a93c7.appspot.com",
//         messagingSenderId: "200303573305",
//         appId: "1:200303573305:web:6382ed4aec92e89354d0e8",
//         measurementId: "G-3MWFJ9XW1R"
//     };

//     if(typeof window !=="undefined"){
//         // Initialize Firebase
//         const app = initializeApp(firebaseConfig);
//         const analytics = getAnalytics(app);
//         return analytics
//     }
// }

const firebaseConfig = {
    apiKey: "AIzaSyBQeOtsH4yYgK9nU0twGW58w1CYcDxlx0I",
    authDomain: "my-demo-app-a93c7.firebaseapp.com",
    projectId: "my-demo-app-a93c7",
    storageBucket: "my-demo-app-a93c7.appspot.com",
    messagingSenderId: "200303573305",
    appId: "1:200303573305:web:6382ed4aec92e89354d0e8",
    measurementId: "G-3MWFJ9XW1R"
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAnalytics = await isSupported() ? getAnalytics(firebaseApp) : null

export { firebaseApp, firebaseAnalytics }