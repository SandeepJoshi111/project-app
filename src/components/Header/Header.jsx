import { useState, useEffect } from "react";
import { auth, db } from "../../firebase/Firebase";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.ref(`/users/${user.uid}`)
          .once("value")
          .then((snapshot) => {
            setUser(snapshot.val());
          });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.firstName} {user.lastName}!</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
}

export default Header;