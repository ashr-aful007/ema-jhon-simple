import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../Firebase/Firebase.config';
 
export const AuthContext = createContext()
const auth = getAuth(app);


const UserContext = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     //user Create function
     const createUser = (email, password) =>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password);
     }
     //sign in function
     const signIn = (email, password) =>{
          return signInWithEmailAndPassword(auth, email, password)
     }
     //logOut function
     const logOut = () =>{
          setLoading(true)
          return signOut(auth);
     }

     useEffect( ()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
               console.log('current user inside state change', currentUser)
               setUser(currentUser)
               setLoading(false);
          });
          return () => unSubscribe();
     }, [])


     const authInfo = {user, loading, createUser, signIn, logOut}
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default UserContext;