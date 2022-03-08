import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVMnKYELEIaBVZmtaZW01uDS-YfemWA9w",
  authDomain: "employees-management-sys-ab920.firebaseapp.com",
  projectId: "employees-management-sys-ab920",
  storageBucket: "employees-management-sys-ab920.appspot.com",
  messagingSenderId: "1007451391799",
  appId: "1:1007451391799:web:9df04c8e48ae4daf7bbcb2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;