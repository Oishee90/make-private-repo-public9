import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null)
    

    // social Auth providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    console.log(user)
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user
    const updateUserProfile = (name,image) => {
    
        updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: image
          })
    }
   
    // sighn in
    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google log in
    const googleLogIn = () => {
        return signInWithPopup(auth,googleProvider)
    }
    // github log in
    const githubLogIn = () => {
        return signInWithPopup(auth,githubProvider )
    }
    // logout
    const logOut = () => {
        setUser(null)
        signOut(auth)
    }
    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user)
            {
        setUser(user)
            }
        })
    },[])

const allvalues = {createUser,updateUserProfile , signInUser, googleLogIn, githubLogIn,logOut,user }
    return (
        <AuthContext.Provider value={allvalues}>
               {children} 
        </AuthContext.Provider>
        
       
    );
};

export default FirebaseProvider;