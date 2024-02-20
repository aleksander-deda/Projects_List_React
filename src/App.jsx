import {useState, useContext} from 'react';

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from './components/SelectedProject';
import {ProjectContext} from './store/projects-context.jsx'
import ProjectContextProvider from './store/projects-context.jsx'


function App() {
  const {projects, selectedProjectId,} = useContext(ProjectContext);
  console.log('selectedProjectId ',selectedProjectId)


  return (
    
    <main className="h-screen my-8 flex gap-8">
      <ProjectContextProvider>

          <ProjectsSidebar />

      </ProjectContextProvider>
    </main>
    
  );
}

export default App;
