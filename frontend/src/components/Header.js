import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light topnav">
      <div className="container-fluid">
        <h2 className="navbar-brand">Munkalam</h2>
        <Link className="btn btn-create" to="/new">
          <i className="fa fa-plus"></i> New Petition
        </Link>
      </div>
    </nav>
  );
};

export default Header;
