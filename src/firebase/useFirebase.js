import { useEffect, useState } from 'react'
import initializationAuth from './firebase.init'
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

initializationAuth()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const auth = getAuth()
    // google sign in
    const googleSignIn = (success, navigate,location) => {
        setLoading(true)
        const provider = new GoogleAuthProvider()
        let from = location.state?.from?.pathname || "/";
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
                success()
                navigate(from)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }
    // create user with email and password
    const createUser = (email, password, name, success, navigate) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                success()
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }

    // email sign in
    const emailSignIn = (email, password, success, navigate,fail) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                success()
                navigate('/')
            }).catch(error => {
                setError(error.message)
                // fail()
            })
            .finally(() => setLoading(false))
    }
    // Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
            else {
                setUser({})
            }
        })

        return () => unsubscribe;
    }, [auth])

    // sign out
    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }
    return {
        user,
        error,
        loading,
        googleSignIn,
        logOut,
        createUser,
        emailSignIn
    }
}
export default useFirebase;