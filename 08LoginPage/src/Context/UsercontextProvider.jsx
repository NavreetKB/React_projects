import React from "react";
import Usercontext from "./Usercontext";

const UsercontextProvider=({children})=>{
    const [user,setuser]=React.useState(null)

    return(
        <Usercontext.Provider value={{user,setuser}}>
            {children}
        </Usercontext.Provider>
    )

}

export default UsercontextProvider

/*=========================NOTES=========================
1.  USERCONTEXT.PROVIDER: provider is a property of usercontext(store) that will provide to its children . we can pass anything to provider as props by using value
2. const UsercontextProvider = ({ children }) => { ... }: Defines a functional component named UsercontextProvider that takes children as a prop. The children prop represents the nested elements or components within the UsercontextProvider component.
3. <Usercontext.Provider value={{ user, setUser }}> ... </Usercontext.Provider>: Wraps the children within the Usercontext.Provider. This makes the user state and the setUser function available to all components that are descendants of UsercontextProvider
4.value={{ user, setUser }}: Provides the user state and setUser function as the value to the Usercontext.Provider. This means any component that consumes Usercontext can access user and setUser
 */