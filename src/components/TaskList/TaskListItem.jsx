import { Square, SquareCheckBig, Trash2 } from 'lucide-react'

const TaskListItem = ({ completed, deleteTask, toggleTaskCompleted, children }) => {
  return (
    <li className='flex items-center justify-between rounded-full px-4 py-2 hover:bg-neutral-100'>
      <button className={`flex w-full items-center gap-2 ${completed && 'text-neutral-400'}`} onClick={toggleTaskCompleted}>
        {completed
          ? <SquareCheckBig size={20} />
          : <Square size={20} />}
        <p className={completed ? 'line-through' : undefined}>{children}</p>
      </button>

      <button className='rounded-full bg-red-500 p-2 text-white hover:bg-red-400 active:opacity-65' onClick={deleteTask}>
        <Trash2 size={18} />
      </button>
    </li>
  )
}

export default TaskListItem
