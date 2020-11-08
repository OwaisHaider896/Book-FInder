import React, { useState } from "react";

const Home = () => {
  const [user, searchUser] = useState("");
  const [userData, setUserData] = useState([]);

  const ApiKey = "AIzaSyACI5bTAVfUubIPeb_sP2tOSrRyKnCZRdA";

  const click = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${user}&key=${ApiKey}`
    );
    const data = await response.json();
    setUserData(data);

    console.log(data);
  };

  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => {
          searchUser(e.target.value);
        }}
      />

      <button onClick={click}>Search</button>
    </div>
  );
};

export default Home;
