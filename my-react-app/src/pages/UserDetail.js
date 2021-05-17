import React from "react";

const UserDetail = (props) => {
  return (
    <div>
      <ul className="detail-user">
        <li>Title: {props.detail.name.title}</li>
        <li>Gender: {props.detail.gender}</li>
        <li>Age: {props.detail.registered.age}</li>
      </ul>
    </div>
  );
};

export default UserDetail;
