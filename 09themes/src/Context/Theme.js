import {createContext, useContext} from 'react'

export const Themecontext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme: ()=>{}
})

export const ThemeProvider= Themecontext.Provider

export default function useTheme(){
    return useContext(Themecontext)
}
/*======================NOTES================================
1. CREATE CONTEXT:- is a function used to create a Context object. Context provides a way to pass data through the component tree without having to pass props down manually at every level. It’s useful for sharing global data like themes, user information, or any other DATA THAT MANY COMPONNETS NEED TO ACCESS.   
2. The Provider component will be used to supply the context value to its child components  (context=store and provider is store window)
3. here we have passed some default values to the context(store) to keep
  ==>imp feature that we have just created or named the functions here and we will define them elsewhere using the same names!!
4. the default values are passed inside an object which can further have an array in itself

5. in the same file we have created the context , the context provider and a custom hook
  usecontext is  a hook which always has to be passed with a context

*/