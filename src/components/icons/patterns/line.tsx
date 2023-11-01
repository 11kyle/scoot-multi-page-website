type IconProps = React.SVGProps<SVGSVGElement> & {}

export default function Line({...props}: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="203" 
      height="15"
      {...props}
    >
      <path 
        fill="none" 
        stroke="#FCB72B" 
        strokeWidth="15" 
        d="M203 7.5H.5"
      />
    </svg>
  )
}
