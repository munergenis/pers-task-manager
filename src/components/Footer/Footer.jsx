import Button from 'components/Button/Button'

const Footer = () => {
  return (
    <footer className='bg-neutral-200 px-6 pt-6 pb-8'>
      <Button className='bg-neutral-50 border border-neutral-300 hover:bg-red-500 hover:text-white active:opacity-65'>Delete completed</Button>
    </footer>
  )
}

export default Footer
