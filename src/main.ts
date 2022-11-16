import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

//integrando toastify para las notificaciones
import "toastify-js/src/toastify.css"

//integrando firebase
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBVeE1CDftYHWd881YUQM28Hzv_kj3gLso",
    authDomain: "crud-vue-b39fc.firebaseapp.com",
    databaseURL: "https://crud-vue-b39fc-default-rtdb.firebaseio.com",
    projectId: "crud-vue-b39fc",
    storageBucket: "crud-vue-b39fc.appspot.com",
    messagingSenderId: "399448208920",
    appId: "1:399448208920:web:5a0c62331bc7985473f56d"
  };
  

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
export {auth,db};

createApp(App).use(router).mount('#app')
