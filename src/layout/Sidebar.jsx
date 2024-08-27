import { CirclePlus } from 'lucide-react'

const Sidebar = ({ children, openAddCategoryModal }) => {
  return (
    <aside className='flex w-64 flex-col gap-4 bg-neutral-200 p-6'>
      <header className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Categories</h2>
        <button className='p-2' onClick={openAddCategoryModal}>
          <CirclePlus size={18} />
        </button>
      </header>
      <nav>
        {children}
      </nav>
    </aside>
  )
}

export default Sidebar
