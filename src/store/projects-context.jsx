import { createContext} from 'react'

export const ProjectContext = createContext({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
    handleStartAddProject: () => {},
    handleSelectProject: () => {},
    })