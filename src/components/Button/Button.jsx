const Button = ({ icon, className, children, onClick, ...rest }) => {
  return (
    <button
      className={`flex items-center gap-2 rounded px-4 py-2 text-base transition-colors ${className}`}
      onClick={onClick}
      {...rest}
    >
      {icon && icon}
      {children}
    </button>
  )
}

export default Button
