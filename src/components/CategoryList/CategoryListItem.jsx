import { Trash2 } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const CategoryListItem = ({ isSelected, selectCategory, deleteCategory, children }) => {
  const selectedCategoryStyle = isSelected ? 'bg-white' : 'bg-transparent hover:bg-neutral-100'
  const [hovered, setHovered] = useState(false)
  const liRef = useRef(null)

  useEffect(() => {
    const toggleHovered = () => setHovered(prevState => !prevState)
    const liEl = liRef.current

    if (liEl) {
      liEl.addEventListener('mouseenter', toggleHovered)
      liEl.addEventListener('mouseleave', toggleHovered)
    }
    return () => {
      liEl.removeEventListener('mouseenter', toggleHovered)
      liEl.removeEventListener('mouseleave', toggleHovered)
    }
  }, [])

  return (
    <li
      className={`flex size-full items-center gap-4 rounded ${selectedCategoryStyle}`}
      ref={liRef}
    >
      <button
        className='flex-1 truncate px-4 py-2 text-left'
        onClick={selectCategory}
      >
        {children}
      </button>

      {hovered &&
        <button
          className='mr-2 rounded-full bg-red-500 p-2'
          onClick={deleteCategory}
        >
          <Trash2 color='white' size={16} />
        </button>}
    </li>
  )
}

export default CategoryListItem
