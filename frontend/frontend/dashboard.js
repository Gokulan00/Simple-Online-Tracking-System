const firebaseConfig = {
  apiKey: "AIzaSyCXfzO34BmXc1JqX_5U8t-VywpnccwJslI",
  authDomain: "order-tracking-system-eb37b.firebaseapp.com",
  projectId: "order-tracking-system-eb37b",
  storageBucket: "order-tracking-system-eb37b.firebasestorage.app",
  messagingSenderId: "554833467629",
  appId: "1:554833467629:web:0bfba09a83a37efe6ad4e4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function loadOrders(){

db.collection("orders").get().then((querySnapshot)=>{

let table = document.getElementById("orderTable");

querySnapshot.forEach((doc)=>{

let data = doc.data();

let row = `
<tr>
<td>${doc.id}</td>
<td>${data.customer_name}</td>
<td>${data.product}</td>
</tr>
`;

table.innerHTML += row;

});

});

}

loadOrders();
