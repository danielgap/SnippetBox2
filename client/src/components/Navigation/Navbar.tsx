import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../store/AuthContext';
import routes from './routes.json';

export const Navbar = () => {
  const { isAuthenticated, user, logout, isLoading, isUserAdmin } = useAuth();

  const authLinks = (
    <Fragment>
      {isUserAdmin && (
        <li className="nav-item">
          <NavLink to="/admin/users" className="nav-link">
            Admin
          </NavLink>
        </li>
      )}
      <li className="nav-item">
        <span className="nav-link">
          Hello, {user?.username}
          {isUserAdmin && <span className="badge badge-success ml-2">Admin</span>}
        </span>
      </li>
      <li className="nav-item">
        <button className="btn btn-link nav-link" onClick={logout}>
          Logout
        </button>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <NavLink to="/register" className="nav-link">
          Register
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          SnippetBox2
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            {routes.routes.map(({ name, dest }: { name: string; dest: string }) => (
              <li key={dest} className="nav-item">
                <NavLink to={dest} className="nav-link" exact>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ms-auto">
            {!isLoading && (isAuthenticated ? authLinks : guestLinks)}
          </ul>
        </div>
      </div>
    </nav>
  );
};
