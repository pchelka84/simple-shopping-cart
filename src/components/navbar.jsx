import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand" href="#">
          Shopping Cart
          <span className="badge badge-pill badge-secondary ml-2">
            {totalCounters}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
