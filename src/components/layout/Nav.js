import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
function Nav() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();
  function logout() {
    setAuth(null);
    history.push("/");
  }
  return (
    <nav>
      <Link to="/">Home</Link>
      {auth ? (
        <>
          <Link to="/dashboard">Dashboard</Link>|
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login </Link>
      )}
    </nav>
  );
}

export default Nav;
