import { CirclePlus } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className='flex w-64 flex-col gap-4 bg-neutral-200 p-6'>
      <header className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Categories</h2>
        <button className='p-2'>
          <CirclePlus size={18} />
        </button>
      </header>
      <nav>
        <ul className='flex flex-col'>
          <li>
            <button
              className='size-full rounded px-4 py-2 text-left hover:bg-neutral-100'
            >
              Personal
            </button>
          </li>
          <li className='rounded py-2'>
            <button className='size-full rounded px-4 py-2 text-left hover:bg-neutral-100'>
              Job
            </button>
          </li>
          <li className='rounded py-2'>
            <button className='size-full rounded px-4 py-2 text-left hover:bg-neutral-100'>
              Shopping
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
