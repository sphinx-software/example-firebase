const admin = require("firebase-admin");
let RandomData = require('./data/RandomData');

// Fetch the service account key JSON file contents
const serviceAccount = require("./sphinx-enebular-firebase.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sphinx-enebular.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
let db = admin.database();

let ref = db.ref("/public_resource");

let postsRef = ref.child("posts");

let list = [];
postsRef.on('value', function(snap) { list = snap.val() || []; });

let i = 1;

let looper = setInterval(() => {
  i++;
  let data = RandomData.makeRandomData(new Date(), new Date());
  list.push(data);
  postsRef.set(list);

  if (i > 100) {
    clearInterval(looper);
  }
}, 5000);




