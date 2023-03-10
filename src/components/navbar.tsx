import {Link} from 'react-router-dom';
import {auth} from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import {signOut} from "firebase/auth"
import { async } from '@firebase/util';

export const Navbar= ()=>{

    const [user] = useAuthState(auth)

    const signUserOut = async()=>{
        await signOut(auth)
    }
    return <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <div>
            <p>{user?.displayName}</p>
            {user && (
                <>
            <img src={user?.photoURL|| ""} width="100" height="100"/>
            <button onClick={signUserOut}>Sign Out</button>
            </>
            )}
        </div>
    </div>
}     