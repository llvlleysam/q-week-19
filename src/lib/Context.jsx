import { createContext, useState } from "react"


export const rootContext= createContext()
export default function ContextProvider({children}) {
    const [editMode,setEditMode]=useState(null)
  return (
  <div>
    <rootContext.Provider value={{editMode,setEditMode}}>
      {children}
    </rootContext.Provider>
  </div>
  )
}
