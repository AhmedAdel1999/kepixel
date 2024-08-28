import { createContext,useState } from "react"

export const AuthContext = createContext()
export const AuthProvider = ({children}) =>{
    const [kingOFUser,setKindOFUser] = useState("personal")
    return(
       <AuthContext.Provider value={{kingOFUser,setKindOFUser}}>
          {children}
       </AuthContext.Provider>
    )
}
