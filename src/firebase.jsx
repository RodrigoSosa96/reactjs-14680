import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDeaKtyOkxfiQ59Vb2ZpKj1Gtrz4G_7aNM",
	authDomain: "proyecto-react-coderhous-c7132.firebaseapp.com",
	projectId: "proyecto-react-coderhous-c7132",
	storageBucket: "proyecto-react-coderhous-c7132.appspot.com",
	messagingSenderId: "959222929961",
	appId: "1:959222929961:web:588c8cc1d2189194059a38",
};


const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app)
