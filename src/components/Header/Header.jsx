import React, { useState, useEffect } from 'react';
import { auth } from "../../firebase/Firebase";
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const Header = (props) => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   // Get a Firestore reference
  //   const db = firebase.firestore();

  //   // Query the "users" collection
  //   const unsubscribe = db.collection("users").onSnapshot((querySnapshot) => {
  //     const userList = [];
  //     querySnapshot.forEach((doc) => {
  //       // Get the document data and add it to the user list
  //       userList.push(doc.data());
  //     });
  //     setUsers(userList);
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <div>
      {/* <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.email}>
            <p>{user.firstName} {user.lastName}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul> */}
      
    </div>
  );
}

export default Header;
