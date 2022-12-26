// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase,ref,set,onValue,onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiHdiXBf1JV6YAGYC_VoiM_YkJ6q_BYFg",
  authDomain: "registraion-form-f5303.firebaseapp.com",
  projectId: "registraion-form-f5303",
  storageBucket: "registraion-form-f5303.appspot.com",
  messagingSenderId: "700762238216",
  appId: "1:700762238216:web:146a98a3fd84043edd50bd",
  measurementId: "G-LLQLX9ERTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();


var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var num = document.getElementById('num');
var cnic = document.getElementById('cnic');

var parent = document.getElementById('parent')

window.saveValue = function(){
    var obj = {
        name : fname.value,
        last : lname.value,
        email : email.value,
        pass : pass.value,
        num  : num.value,
        cnic : cnic.value,
    }
obj.id = Math.random().toString().slice(2)
const regRef = ref (db,`reg/${obj.id}/`)
set(regRef,obj)
};

function getData(){
    var dataList = [];
    const regRef = ref(db, 'reg/');
    onChildAdded(regRef, function (dt) {

        dataList.push(dt.val())
        console.log(dataList)
        parent.innerHTML = ""
        for (var i = 0; i < dataList.length; i++) {
            parent.innerHTML += `<li>${dataList[i].reg}</li>`
        }

    })
}
getData();



