import PropTypes from "prop-types"

function TaskBody ({ title, description, notes, isClosed, tags, dueDate }) {
  return (
    <div className='task-body'>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{notes}</p>
      {tags.map((tag) => (<div className="tag">{tag}</div>))}
      <input type="text" value={dueDate} />
      {isClosed ? <button>Open</button> : <button>Close</button>}
    </div>
  )
}

export default TaskBody

TaskBody.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  notes: PropTypes.string,
  isClosed: PropTypes.bool,
  tags: PropTypes.array,
  dueDate: PropTypes.string,
}