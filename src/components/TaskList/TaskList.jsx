const TaskList = ({ selectedCategoryName, children }) => {
  return (
    <section className='flex w-full flex-col gap-4 px-8 py-6'>
      <header>
        <h3 className='text-2xl'>{selectedCategoryName}</h3>
      </header>
      <main>
        <ul className='flex flex-col gap-3 text-lg'>
          {children}
        </ul>
      </main>
    </section>
  )
}

export default TaskList
