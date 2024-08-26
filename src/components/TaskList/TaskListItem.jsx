import { Square, SquareCheckBig, Trash2 } from 'lucide-react'

const TaskListItem = ({ completed, deleteTask, markTaskCompleted, children }) => {
  return (
    <li className='flex items-center justify-between rounded-full px-4 py-2 hover:bg-neutral-100'>
      <div className={`flex items-center gap-2 ${completed && 'text-neutral-400'}`}>
        <button onClick={markTaskCompleted}>
          {completed
            ? <SquareCheckBig size={20} />
            : <Square size={20} />}
        </button>
        <p className={completed ? 'line-through' : undefined}>{children}</p>
      </div>

      <button className='rounded-full bg-red-500 p-2 text-white hover:bg-red-400 active:opacity-65' onClick={deleteTask}>
        <Trash2 size={18} />
      </button>
    </li>
  )
}

export default TaskListItem
