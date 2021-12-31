import React,{createContext} from 'react';
import useFirebase from '../../firebase/useFirebase'
import useQuestions from '../../hooks/useQuestions';

export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const allContext=useFirebase()
    const questions=useQuestions()
    const data={allContext,questions}
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;