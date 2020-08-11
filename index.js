

var i=0;
heading = document.querySelector("h1");

var rootRef = firebase.database().ref().child("shopDetails");
console.log("Shop Users Details :");
rootRef.on("child_added", snap => {

	var name = snap.child("name").val();
	var email = snap.child("email").val();
	i = i + 1;

	console.log("name :"+name);
	console.log("email :"+email);
});



//for(var j=0;j<=i+1;j++) {
//heading.textContent = name;
//}
//alert("Connected");

/*var admin = require("firebase-admin");

// Get a database reference to our posts
var db = admin.database();
var ref = db.ref("server/saving-data/fireblog/posts");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});*/

//var database = firebase.database();