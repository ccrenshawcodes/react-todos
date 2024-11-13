import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import ProjectsList from './components/ProjectsList'
import { projects } from './projects'
import TasksList from './components/TasksList'

function App() {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <>
      <Nav />
      <ProjectsList />
      <TasksList project={currentProject} />
    </>
  )
}

export default App
