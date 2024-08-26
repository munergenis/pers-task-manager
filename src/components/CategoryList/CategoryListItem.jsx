const CategoryListItem = ({ isSelected, selectCategory, children }) => {
  const selectedCategoryStyle = isSelected ? 'bg-white' : 'bg-transparent hover:bg-neutral-100'

  return (
    <li>
      <button
        className={`size-full rounded px-4 py-2 text-left ${selectedCategoryStyle}`}
        onClick={selectCategory}
      >
        {children}
      </button>
    </li>
  )
}

export default CategoryListItem
