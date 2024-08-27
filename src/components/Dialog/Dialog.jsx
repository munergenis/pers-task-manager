import { X } from 'lucide-react'
import { useRef, useEffect } from 'react'

const Dialog = ({ open, close, children }) => {
  const ref = useRef()

  useEffect(() => {
    if (open) {
      ref.current.showModal()

      const input = ref.current.querySelector('input')
      input.focus()
    } else {
      ref.current.close()
    }
  }, [open])

  return (
    <dialog
      className='relative flex flex-col gap-8 rounded-lg border p-6 shadow-lg backdrop:bg-white/75'
      ref={ref}
      onClose={close}
    >
      <button
        className='absolute right-4 top-4'
        onClick={close}
      >
        <X size={16} />
      </button>
      {children}
    </dialog>
  )
}

export default Dialog
