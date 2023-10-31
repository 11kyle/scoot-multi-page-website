type IconProps = React.SVGProps<SVGSVGElement> & {}

export default function Circle({...props}: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="445" 
      height="445"
      viewBox="0 0 445 445"
      {...props}
    >
      <circle 
        cx="302.5" 
        cy="222.5" 
        r="222.5" 
        fill="#E5ECF4" 
        fillRule="evenodd" 
        transform="translate(-80)"
      />
    </svg>
  )
}
