import { Square, SquareCheckBig, Trash2 } from 'lucide-react'
const TaskListItem = ({ completed, deleteTask, toggleTaskCompleted, children }) => {
  return (
    <li
      className='group flex items-center justify-between rounded-full py-1 pl-4 pr-2 transition-colors duration-200 ease-in-out hover:bg-neutral-100'
    >
      <button className={`flex w-full items-center gap-2 py-1 ${completed && 'text-neutral-400'}`} onClick={toggleTaskCompleted}>
        {completed
          ? <SquareCheckBig size={20} />
          : <Square size={20} />}
        <p className={`mr-4 text-left ${completed ? 'line-through' : undefined}`}>{children}</p>
      </button>

      <button className='rounded-full p-2 text-black opacity-0 transition-all duration-100 ease-in-out hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white focus:opacity-100 group-hover:opacity-100' onClick={deleteTask}>
        <Trash2 size={18} />
      </button>
    </li>
  )
}

export default TaskListItem
