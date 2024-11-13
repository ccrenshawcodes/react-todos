import { projects } from "../projects";

function ProjectsList () {
  const tabsList = projects.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))

  return (
    <div className='projects-list'>
      {tabsList}
    </div>
  )
}

export default ProjectsList