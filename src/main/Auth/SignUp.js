import { 
    auth, db , 
    // googleProvider
} from "../../firebase/firebase-config";
import {
    createUserWithEmailAndPassword,
    // signInWithPopup,
} from "firebase/auth";
import {setDoc,doc} from 'firebase/firestore'
import { useState } from "react";


export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setDoc(doc(db, 'users', email), {
                savedShows: []
            })
            .then((authUser) => {
                console.log(authUser)
            });
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <div className="signin">
            <form>
                <h1> Sign Up </h1>
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
                <button onClick={register}> Sign Up</button>
                {/* <button onClick={signInWithGoogle}> Sign In With Google</button> */}
            </form>
        </div>
    );
};

