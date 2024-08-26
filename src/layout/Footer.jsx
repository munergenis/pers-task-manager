import Button from 'components/Button/Button'

const Footer = ({ deleteCompletedTasks }) => {
  return (
    <footer className='bg-neutral-200 px-6 pb-8 pt-6'>
      <Button
        className='border border-neutral-300 bg-neutral-50 hover:bg-red-500 hover:text-white active:opacity-65'
        onClick={deleteCompletedTasks}
      >
        Delete completed
      </Button>
    </footer>
  )
}

export default Footer
