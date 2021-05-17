import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import UserDetail from "../pages/UserDetail";
import { FaPhoneAlt, FaEnvelope, FaMapMarked } from "react-icons/fa";

const User = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="emp-photo">
            <img src={props.usuario.picture.medium} alt="UserPhoto" />
          </div>
          <h2 className="emp-title">
            {props.usuario.name.first} {props.usuario.name.last}
          </h2>
          <p className="emp-description">
            {props.usuario.location.city}, {props.usuario.location.country}
          </p>
        </div>
        <div className="flip-card-back">
          <div className="info-row-container">
            <div className="info-row">
              <span className="icon">
                <FaEnvelope />
              </span>
              <span className="info">{props.usuario.email}</span>
            </div>
            <div className="info-row">
              <span className="icon">
                <FaMapMarked />
              </span>
              <span className="info">{props.usuario.location.city}</span>
            </div>
            <div className="info-row">
              <span className="icon">
                <FaPhoneAlt />
              </span>
              <span className="info">{props.usuario.cell}</span>
            </div>
            <Router>
              <Link
                // to={`/detail/${props.usuario.login.uuid}`}
                // to="/detail/:uuid"
                className="more-info more"
              >
                + Info
              </Link>
              <Switch>
                <Route exact path="/detail/:uuid">
                  <UserDetail detail={props.usuario} />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
