// import React, { createContext, useContext, useState } from 'react'

// export const AuthContext = createContext()

//  function AuthProvider({children}) {
//     const initialState = localStorage.getItem("Users")
//     const [authUser,setauthUser] = useState(
//         initialState?JSON.parse(initialState):null
//     )
//   return (
//     <AuthContext.Provider value={[authUser,setauthUser]}>
//      {children} 
//     </AuthContext.Provider>
//   )
// }
//  export const useAuth = ()=> useContext(AuthContext)

// export default AuthProvider;

import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("Users");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setAuthUser(parsedData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        // Handle error, maybe clear localStorage or set default value
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
