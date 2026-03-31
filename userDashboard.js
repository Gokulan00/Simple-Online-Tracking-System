const firebaseConfig = {
  apiKey: "AIzaSyCXfzO34BmXc1JqX_5U8t-VywpnccwJslI",
  authDomain: "order-tracking-system-eb37b.firebaseapp.com",
  projectId: "order-tracking-system-eb37b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function loadUserOrders(){

let userEmail = localStorage.getItem("userEmail");

db.collection("orders").get().then((querySnapshot)=>{

let table = document.getElementById("orderTable");

querySnapshot.forEach((doc)=>{

let data = doc.data();

// 🔥 IMPORTANT CHANGE HERE
if(data.email == userEmail){

let row = `
<tr>
<td>${doc.id}</td>
<td>${data.product}</td>
<td>${data.status}</td>
</tr>
`;

table.innerHTML += row;

}

});

});

}

loadUserOrders();