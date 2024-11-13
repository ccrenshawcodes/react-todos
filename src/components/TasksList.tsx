import PropTypes from 'prop-types';

function TasksList ({project}) {
  const tasks = project.tasks;
  const taskList = tasks.map((item) => (
    <div key={item.id}>{item.title}</div>
  ))

  return (
    <div className="tasks-list">
      {taskList}
    </div>
  )
}

export default TasksList

TasksList.propTypes = {
  project: PropTypes.array,
}
