const Button = ({ icon, className, children }) => {
  return (
    <button className={`flex items-center gap-2 text-base rounded px-4 py-2 transition-all ${className}`}>
      {icon && icon}
      {children}
    </button>
  )
}

export default Button
