import PropTypes from "prop-types";

function TaskActions({ currentTask, onOpenClose, onDelete }) {
  const openCloseText = currentTask.closed ? 'Reopen task' : 'Close task';
  return (
    <div className="task-actions">
      <button 
      className="open-close-button"
      onClick={onOpenClose}
      >
        {openCloseText}
      </button>
      <button 
        className="delete-button"
        onClick={onDelete}
      >
        Delete task
      </button>
    </div>
  )
}

export default TaskActions

TaskActions.propTypes = {
  currentTask: PropTypes.object,
  onOpenClose: PropTypes.func,
  onDelete: PropTypes.func,
}