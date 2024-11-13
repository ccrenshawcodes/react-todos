import { useState } from 'react'

import Nav from './components/Nav'
import ProjectsList from './components/ProjectsList'
import { projects } from './projects.js';
import TasksList from './components/TasksList'
import TaskBody from './components/TaskBody'

function App() {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const currentTasks = currentProject.tasks.map((task) => (
    <TaskBody
      key={task.id}
      title={task.title}
      description={task.description}
      notes={task.notes}
      isClosed={task.closed}
      tags={task.tags}
      dueDate={task.due}
    />
  ))

  return (
    <>
      <div className="top-ribbons">
        <Nav />
        <ProjectsList />
      </div>

      <div className="page-content">
        <TasksList project={currentProject} />
        {currentTasks}
      </div>
    </>
  )
}

export default App

/* 
TODO next
  - figure out where to render TaskActions; figure out how to pass it the right props (& should I change the props I have for the TaskBody?)
  - handle for new tasks to be created
  - handle for new projects to be created
  - 'new' dropdown

  - task list - accordion for "closed" tasks

  - add color modes (light, dark, coffee)

  FIXME
  - 

  NIT
  - add fonts
  - style cool tabs :) 
  - add breakpoints

*/