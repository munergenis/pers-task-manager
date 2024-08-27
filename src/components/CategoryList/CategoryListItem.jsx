import { Trash2 } from 'lucide-react'

const CategoryListItem = ({ isSelected, selectCategory, deleteCategory, children }) => {
  const selectedCategoryStyle = isSelected ? 'bg-white' : 'bg-transparent hover:bg-neutral-100'

  return (
    <li
      className={`group flex size-full items-center gap-4 rounded transition-colors duration-200 ease-in-out ${selectedCategoryStyle}`}
    >
      <button
        className='flex-1 truncate px-4 py-2 text-left'
        onClick={selectCategory}
      >
        {children}
      </button>

      <button
        className='mr-2 rounded-full p-2 text-black opacity-0 duration-100 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white focus:opacity-100 group-hover:opacity-100'
        onClick={deleteCategory}
      >
        <Trash2 size={16} />
      </button>
    </li>
  )
}

export default CategoryListItem
