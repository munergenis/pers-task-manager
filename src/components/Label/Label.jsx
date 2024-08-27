const Label = ({ children }) => {
  return (
    <label
      className='pl-8 text-right text-sm font-medium'
      htmlFor=''
    >
      {children}
    </label>
  )
}

export default Label
