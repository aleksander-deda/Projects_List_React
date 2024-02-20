import { createContext, useState} from 'react'
import SelectedProject from '../components/SelectedProject.jsx';
import NewProject from '../components/NewProject.jsx';
import NoProjectSelected from '../components/NoProjectSelected.jsx';
import ProjectsSideBar from '../components/ProjectsSideBar.jsx';


export const ProjectContext = createContext({
    selectedProjectId: undefined,
    selectedProject: null,
    projects: [],
    tasks: [],
    // content: <NoProjectSelected/>,
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


export default function ProjectContextProvider({children}) {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
      })
        
        function handleAddTask(text) {
          setProjectsState(prevState => {
            const taskId = Math.random();
            const newTask = {
              text: text,
              projectId: prevState.selectedProjectId,
              id: taskId
            };
            return {
              ...prevState,
              tasks: [newTask, ...prevState.tasks]
            }
          })
        }
        function handleDeleteTask(id) {
          setProjectsState(prevState => {
            return {
              ...prevState,
              tasks: prevState.tasks.filter(
                (task) => task.id !== id),
            }
          });
        }
        function handleSelectProject(id) {
          setProjectsState(prevState => {
            return {
              ...prevState,
              selectedProjectId: id,
            }
          });
        }
        
        function handleStartAddProject(){
            setProjectsState(prevState => {
              return {
                ...prevState,
                selectedProjectId: null,
              }
            });
        }
        
        function handleCancelAddProject() {
          setProjectsState(prevState => {
            return {
              ...prevState,
              selectedProjectId: undefined,
            }
          });
        }
      
      
        function handleAddProject(projectData) {
          setProjectsState(prevState => {
            const newProject = {
              ...projectData,
              id: Math.random()
            };
            return {
              ...prevState,
              selectedProjectId: undefined,
              projects: [...prevState.projects, newProject]
            }
          })
        }
      
        function handleDeleteProject(){
          setProjectsState(prevState => {
            return {
              ...prevState,
              selectedProjectId: undefined,
              projects: prevState.projects.filter(
                (project) => project.id !== prevState.selectedProjectId),
            }
          });
        }
      
        const selectedProject = projectsState.projects.find(project => project.id ===projectsState.selectedProjectId);
        let content = <SelectedProject/>;
      
        if (projectsState.selectedProjectId === null){
            content = <NewProject/>
        } else if(projectsState.selectedProjectId === undefined){
            content = <NoProjectSelected/>
      
        }
      
        const contextValue = {
          selectedProjectId: projectsState.selectedProjectId,
          selectedProject: selectedProject,
          projects: projectsState.projects,
          tasks: projectsState.tasks,
          handleAddProject: handleAddProject,
          handleStartAddProject: handleStartAddProject,
          handleSelectProject: handleSelectProject,
          handleCancelAddProject: handleCancelAddProject,
          handleDeleteProject: handleDeleteProject,
          handleAddTask: handleAddTask,
          handleDeleteTask: handleDeleteTask
        };
    return <ProjectContext.Provider value={contextValue}>
               {children} {content}
        
        
    </ProjectContext.Provider>
}    