import { createContext,useState } from "react"

export const ProjectContext = createContext()
export const ProjectProvider = ({children}) =>{
    const [projects,setProjects] = useState(["one","two"])
    return(
       <ProjectContext.Provider value={{projects,setProjects}}>
          {children}
       </ProjectContext.Provider>
    )
}
