import React, { useState } from "react";
import "./ProfileInput.scss";
import { database } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";

export default function ProfileInput() {
  const { currentUser } = useAuth();
  const { setProfileExist } = useStateContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let com;
    if (currentUser) {
      com = database.users
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return;
          } else {
            database.users.doc(currentUser.uid).set({
              fullName: {
                firstName: firstName,
                lastName: lastName,
                username: username,
              },
              uid: currentUser.uid,
            });
            setFirstName("");
            setLastName("");
            setProfileExist(true);
          }
        });
    }
    return com;
  };

  return (
    <div className="profile_con w-full flex justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="relative overflow-hidden formCon flex justify-start items-center flex-col w-10/12 rounded-2xl"
      >
        <h1 className="text-2xl w-full text-center mt-5 pb-3">Profile</h1>
        <div className="inputCon flex justify-start items-center flex-col w-full mt-3">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
            className="w-10/12"
          />
        </div>
        <div className="inputCon flex justify-start items-center flex-col w-full mt-5">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
            className="w-10/12"
          />
        </div>
        <div className="inputCon flex justify-start items-center flex-col w-full mt-5">
          <label>Username</label>
          <input
            type="text"
            value={username}
            required
            minLength="4"
            maxLength="10"
            onChange={(e) => setUsername(e.target.value)}
            className="w-10/12"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
