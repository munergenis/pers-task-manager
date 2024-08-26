const CategoryListItem = ({ children }) => {
  return (
    <li>
      <button
        className='size-full rounded px-4 py-2 text-left hover:bg-neutral-100'
      >
        {children}
      </button>
    </li>
  )
}

export default CategoryListItem
