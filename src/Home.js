import React, { useState } from "react";

const Home = () => {
  const [user, searchUser] = useState("");

  return (
    <div>
      <input type="text" />

      <button>Search</button>
    </div>
  );
};

export default Home;
