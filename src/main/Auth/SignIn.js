import { auth } from "../../firebase/firebase-config";
import {signInWithEmailAndPassword,} from "firebase/auth";
import { useState } from "react";
import { SignUp } from "./SignUp";


export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signup, setSignUp] = useState(false);

    const signIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                console.log(authUser)
            });;
        } catch (error) {
            alert(error.message);
        }
    };

    // const logout = async () => {
    //     try {
    //         await signOut(auth);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };
    return (
        <>
            {signup ? <SignUp /> : 
                <div className="signin">
                    <form>
                        <h1> Sign In </h1>
                        <input
                            placeholder="Email..."
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Password..."
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={signIn}> Sign In</button>
                        {/* <button onClick={logout}> Logout </button> */}
                        <h4 > 
                            <span className="login-gray">New to Netflix?</span>
                            <span onClick={() => setSignUp(true)} className="login-but-sign"> Sign up now.</span>
                        </h4>
                    </form>
                </div>
            }
        </>
    );
};
