import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  remove,
  update,
  get,
  onValue,
  off, 
  push,
  onChildRemoved,
  onChildChanged,
  onChildAdded
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBoFT-erWMmwmeLmmUJ382hrYFzQ_WxG7o",
  authDomain: "react-expenses-demo-app-134ea.firebaseapp.com",
  projectId: "react-expenses-demo-app-134ea",
  storageBucket: "react-expenses-demo-app-134ea.appspot.com",
  messagingSenderId: "713249197961",
  appId: "1:713249197961:web:b4376033be919b9a905b58",
  measurementId: "G-4X4554DG03",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();


// const expenses = [
//   {
//     description: 'First Expense',
//     note: '',
//     amount: 12345,
//     createdAt: 27000
//   },
//   {
//     description: 'Rent',
//     note: '',
//     amount: 54321,
//     createdAt: 32000
//   },
//   {
//     description: 'Staionery',
//     note: '',
//     amount: 11111,
//     createdAt: 44444
//   }
// ];

// expenses.forEach((expense) => {
//   push(ref(database, 'expenses'), expense);
// });


const expensesRef = ref(database, 'expenses');
onValue(expensesRef, (snapshot) => {
  const expenseList = [];
  snapshot.forEach((childSnapshot) => {
    expenseList.push({
      id: childSnapshot.key,
      ... childSnapshot.val()
    });
  console.log(expenseList);
  });
}, (err) => {
  console.log('There was a problem with the Expenses Watcher task', err)
});

onChildRemoved(expensesRef, (snapshot) => {
  console.log(`${snapshot.key} ${snapshot.val()} removed from database.`);
});

onChildChanged(expensesRef, (snapshot) => {
  console.log(`${snapshot.key} ${snapshot.val()} changed.`);
});

onChildAdded(expensesRef, (snapshot) => {
  console.log(`New expense added: ${snapshot.key} ${snapshot.val()}.`)
});

// push(ref(database, 'notes'),{
//   title: "Course Topics",
//   body:"New Javascript Course"
// });

// update(ref(database, 'notes/-MjnAMZWp7rqweTX4y_l'), {
//   title: "To Do"
// });

// const notes = [
//   {
//     id: 12,
//     title: 'First Note',
//     body: 'This is my first note'
//   },
//   {
//     id: 13,
//     title: 'Second Note',
//     body: 'This is my second note'
//   },
//   {
//     id: 14,
//     title: 'Third Note',
//     body: 'This is my third note'
//   },
// ]


// const firebaseNotes = {
//   notes: {
//     12: {
//       title: 'First Note',
//       body: 'This is my first note'
//     },
//     13: {
//       title: 'Second Note',
//       body: 'This is my second note'
//     },
//     14: {
//       title: 'Third Note',
//       body: 'This is my third note'
//     },
//   }
// };

// set(ref(database), firebaseNotes)
// .then(() => {
//   console.log("Notes array was saved");
// }).catch((err) => {
//   console.log("Notes array not saved", err);
// });

// const notesWatcher = ref(database, 'notes');
// onValue(notesWatcher, (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }, (err) => {
//   console.log('There was a problem with the Notes Watcher task', err)
// });

// //Create
// set(ref(database), {
//   name: "Stu",
//   age: 35,
//   isNerd: true,
//   job: {
//     title: "Software Developer",
//     company: "Google",
//   },
//   stressLevel: 6,
//   location: {
//     city: "The Beach",
//     country: "Oceana",
//   },
// })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((err) => {
//     console.log("Data failed to save:", err);
//   });

// set(ref(database, "attributes"), {
//   height: 73,
//   weight: 180,
//   isSingle: true,
// })
//   .then(() => {
//     console.log("Data written to database");
//   })
//   .catch((err) => {
//     console.log("Error writing to database", err);
//   });

// //Read
// //====

// //--get data Once
// // const dbRef = ref(database, 'location');
// // get(dbRef)
// //   .then((snapshot) => {
// //     if (snapshot.exists()) {
// //       const val =  snapshot.val();
// //       console.log("Data: \n", val)
// //     } else {
// //       console.log("There is no data");
// //     }
// //   })
// //   .catch((err) => {
// //     console.log("Error getting data", err);
// //   });

// //--get Data - watch for changes

// // const dbRef = ref(database);
// // onValue(dbRef, (snapshot) => {
// //   const val =  snapshot.val();
// //   console.log("Data: \n", val)
// // }, (err) => {
// //   console.log('Problems reading the database', err)
// // });


// const jobWatcher = ref(database);
// onValue(jobWatcher, (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// }, (err) => {
//   console.log('There was a problem with the Job Watcher task', err)
// })

// //Update
// //======

// update(ref(database), {
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
// })
//   .then(() => {
//     console.log("Data updated");
//   })
//   .catch((err) => {
//     console.log("There was an error updating the data", err);
//   });

//   off(jobWatcher);

// // Delete
// //=======

// remove(ref(database, "attributes/isSingle"))
//   .then(() => {
//     console.log("Data removed");
//   })
//   .catch((err) => {
//     console.log("Error deleting data", err);
//   });
