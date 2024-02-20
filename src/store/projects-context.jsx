import { createContext} from 'react'

export const ProjectContext = createContext({
    selectedProjectId: undefined,
    selectedProject: null,
    projects: [],
    tasks: [],
    handleAddProject: () => {},
    handleStartAddProject: () => {},
    handleSelectProject: () => {},
    handleStartAddProject: () => {},
    handleCancelAddProject: () => {},
    handleSelectProject: () => {},
    handleDeleteProject: () => {},
    handleAddTask: () => {},
    handleDeleteTask: () => {},
    })