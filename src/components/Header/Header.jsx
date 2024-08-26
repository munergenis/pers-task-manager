import Button from 'components/Button/Button'
import { PlusCircledIcon } from '@radix-ui/react-icons'

const Header = () => {
  return (
    <header className='bg-black text-white flex items-center justify-between py-6 px-6'>

      <h1
        className='text-2xl font-semibold'
      >
        Task Manager
      </h1>

      <Button
        className='hover:bg-neutral-600 active:opacity-65'
        icon={<PlusCircledIcon />}
      >
        Add Task
      </Button>

    </header>
  )
}

export default Header
