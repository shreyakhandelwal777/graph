
import React,{useState} from 'react';
import Linechart from './Components/Linechart'
import Pie from './Components/Pie'
import Drawer from './Components/Drawer'
import './App.css';
import './Components/Drawer.css';
import { Route } from "react-router-dom";
import Button from'./Components/Button'
import Button1 from'./Components/Button1'


var firebase = require("firebase");

// Add the Firebase products that you want to use

require("firebase/firestore");
var firebaseConfig = {
   
  apiKey: "AIzaSyBXZ9ChpHi1AbjcoO6z2BSLhzZFLB2wt5k",
  authDomain: "graph-d4bda.firebaseapp.com",
  databaseURL: "https://graph-d4bda.firebaseio.com",
  projectId: "graph-d4bda",
  storageBucket: "graph-d4bda.appspot.com",
  messagingSenderId: "118784093623",
  appId: "1:118784093623:web:f30890ac22a2c4373c4c32",
  measurementId: "G-1V9BJQ88CK"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db=firebase.firestore()

function App() {
  const[pie,setPie]=useState(0);
 var shreya1=()=>{
  var docRef = db.collection("graph").doc("pie");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        setPie(doc.data())
        console.log(pie)
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

}

  shreya1()
  return (
    <div className="App">
    
    <Drawer/>

     <Route path="/hello" exact
       render={(props)=>(
        <div  >
        
        <Pie d={pie.value}/>
    <Linechart d={pie.value}/>
    <Button/>
    <Button1/>
    <Pie d={pie.value}/>
    
       </div>)} />
      
<Route path="/hello1" exact
       render={(props)=>(
        <div>
       
        <Pie d={pie.value}/>
    <Linechart d={pie.value}/>
    <Pie d={pie.value}/>
    <Button/>
    <Button1/>
       </div>)} />


       <Route path="/hello2" exact
       render={(props)=>(
        <div>
         
        <Pie d={pie.value}/>
    <Linechart d={pie.value}/>
    <Pie d={pie.value}/>
    <Button/>
    <Button1/>
       </div>)} />
      
      
     

    </div>
  );
}

export default App;
