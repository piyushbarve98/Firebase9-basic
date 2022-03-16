
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, onSnapshot,
   collection,addDoc,deleteDoc,query,orderBy,
   serverTimestamp

} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
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
const q = query(colRef,orderBy('Name','desc'));

onSnapshot(q,(snapshot)=>{
  
    let apps = [];
    snapshot.docs.forEach((doc)=>{
      apps.push({...doc.data(),id: doc.id});
      
    });
    console.log(apps);
});


export { colRef, addDoc,db,doc,deleteDoc,serverTimestamp};
