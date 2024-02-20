import noProjectImage from '../assets/no-projects.png';
import Button from './Button';
import {ProjectContext} from '../store/projects-context.jsx'
import { useContext} from 'react';


export default function NoProjectSelected() {
    const {handleStartAddProject} = useContext(ProjectContext)
    console.log('clicking the button')
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImage} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-500 my-4" >No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p className="mt-8" >
                <Button onClick={handleStartAddProject}>
                    Create new project
                </Button>
            </p>
        </div>
    )
}