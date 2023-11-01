import clsx from "clsx"

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: React.ReactNode
}

export function Button({ children, className, ...props }: ButtonProps) {

  className=clsx(
    "w-[180px] h-[53px] bg-yellow border-[3px] border-yellow box-border text-white body !font-heading !font-bold hover:bg-white hover:text-yellow",
    className
  )
  return (
    <button 
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}
