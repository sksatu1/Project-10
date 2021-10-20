import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    }

    const handleNameOnBlur = (event) => {
        setName(event.target.value);
    }

    const handleEmailOnBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordOnBlur = (event) => {
        setPassword(event.target.value);
    }

    const updateUser = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => {

            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                setUser(result.user);
                updateUser();
                // window.location.reload();
                userLogin(email, password);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        // .catch(error => {
        //     setError(error.message);
        // })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        return userLogin(email, password);
    }

    const handleRegistration = (event) => {
        event.preventDefault();
        return createUser(email, password);
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [auth]);

    return {
        user,
        isLoading,
        signInUsingGoogle,
        handleEmailOnBlur,
        handlePasswordOnBlur,
        handleLogin,
        logOut,
        handleNameOnBlur,
        handleRegistration
    }
}

export default useFirebase;