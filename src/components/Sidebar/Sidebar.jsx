import { PlusCircledIcon } from '@radix-ui/react-icons'

const Sidebar = () => {
  return (
    <aside className='w-64 px-6 py-4 bg-neutral-200 flex flex-col gap-4'>
      <header className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold'>Categories</h2>
        <button className='p-2'>
          <PlusCircledIcon />
        </button>
      </header>
      <nav>
        <ul className='flex flex-col'>
          <li>
            <button
              className='w-full h-full text-left py-2 px-4 rounded hover:bg-neutral-100'
            >
              Personal
            </button>
          </li>
          <li className='py-2 rounded'>
            <button className='w-full h-full text-left py-2 px-4 rounded hover:bg-neutral-100'>
              Job
            </button>
          </li>
          <li className='py-2 rounded'>
            <button className='w-full h-full text-left py-2 px-4 rounded hover:bg-neutral-100'>
              Shopping
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
