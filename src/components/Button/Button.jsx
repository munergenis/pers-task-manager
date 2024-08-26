const Button = ({ icon, className, children }) => {
  return (
    <button className={`flex items-center gap-2 rounded px-4 py-2 text-base transition-colors ${className}`}>
      {icon && icon}
      {children}
    </button>
  )
}

export default Button
