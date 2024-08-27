const Input = ({ placeholder, className, onChange, value, onEnter, ...rest }) => {
  return (
    <input
      className={`rounded border px-3 py-2 text-sm placeholder:text-neutral-600 ${className}`}
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => onChange(target.value)}
      onKeyDown={({ key }) => key === 'Enter' && onEnter()}
      {...rest}
    />
  )
}

export default Input
