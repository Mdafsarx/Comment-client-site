import { createContext, useState } from "react";
export const AuthContext=createContext(null)

const Provider = ({children}) => {
    const [reload,setReload]=useState(false);
    const [Edit,setEdit]=useState(false);
    const [id,setId]=useState(null);

    return (
        <AuthContext.Provider value={{reload,setReload,Edit,setEdit,id,setId}}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;