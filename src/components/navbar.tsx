import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/createPost">Create Post</Link>
        )}
      </div>
      <div className="user">
        <p>{user?.displayName}</p>
        {user && (
          <>
            <img src={user?.photoURL || ""} width="30" height="30" />
            <button className="btn" onClick={signUserOut}>
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};
