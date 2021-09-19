import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensologist</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>
          Log out
        </button>
      </div>
      <div className="header__data-warning">
        This app is only a demo app. Data and data structures may be deleted or
        changed without warning.
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
