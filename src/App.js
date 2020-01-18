import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  //format value then function when declaring state.
  const [users, setUsers] = useState([
    { name: "MbuguaCaleb", message: "Caleb loves react" },
    { name: "TravesyMedia", message: "Caleb loves TravesyMedia" },
    { name: "DevEd", message: "Caleb loves DedEd" }
  ]);
  return (
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
