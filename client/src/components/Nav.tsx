import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import { LOGOUT } from "../apollo/mutations";
import { useQuery,useMutation, useApolloClient } from "@apollo/react-hooks";
import { useAuth } from '../components/utils/AuthProvider'

const Nav = (props) => {
  const {logout} = useAuth()
  return (
      <nav className="menu">
        <ul className="menu-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li className="logout">
            <button onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
  )
}

export default withRouter(Nav);