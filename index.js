import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection, getDocs

} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCAN7HJ2VtfM--ryPZrNsFh3brJlaGNxmM",
  authDomain: "database-1-82b19.firebaseapp.com",
  projectId: "database-1-82b19",
  storageBucket: "database-1-82b19.appspot.com",
  messagingSenderId: "482881143500",
  appId: "1:482881143500:web:fbd73a7763d58747ab3869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db,'Apps');

// getDocs(colRef).then((snapshot)=>{
//     let apps = [];
//     snapshot.docs.forEach((doc)=>{
//       apps.push({...doc.data(),id: doc.id});
//       console.log(apps)
//     });
// }).catch(err=>{
//   console.log(err.message);
// });

const addAppForm = document.getElementById('form1');

addAppForm.addEventListener('submit',(e)=>{
     e.preventDefault();
});