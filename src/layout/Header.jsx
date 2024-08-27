import Button from 'components/Button/Button'
import { CirclePlus } from 'lucide-react'

const Header = ({ openAddTaskModal }) => {
  return (
    <header className='flex items-center justify-between bg-black p-6 text-white'>

      <h1
        className='text-2xl font-semibold'
      >
        Task Manager
      </h1>

      <Button
        className='hover:bg-neutral-600 active:opacity-65'
        icon={<CirclePlus size={18} />}
        onClick={openAddTaskModal}
      >
        Add Task
      </Button>

    </header>
  )
}

export default Header
