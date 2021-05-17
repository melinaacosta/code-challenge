import React, { useState, useEffect } from "react";
import User from "../components/User";

const UserList = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const data = await fetch("https://randomuser.me/api/?results=50");
    const users = await data.json();
    setUsuarios(users.results);
  };

  return (
    <div>
      <div className="header-container">
        <div className="main-header">
          Users Cards generated with Random User API
        </div>
      </div>
      <div>
        <div className="box">
          {usuarios.map((user) => (
            <User key={user.id} usuario={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
