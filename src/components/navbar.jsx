import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand" href="#">
        Shopping Cart
        <span className="badge badge-pill badge-secondary ml-2">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
