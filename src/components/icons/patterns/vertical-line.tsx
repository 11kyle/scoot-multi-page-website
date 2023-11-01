type IconProps = React.SVGProps<SVGSVGElement> & {}

export default function VerticalLine({...props}: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="15" 
      height="513" 
      viewBox="0 0 15 513" 
      fill="none"
      {...props}
    >
      <path d="M7.5 512.5V0.5" stroke="#E5ECF4" strokeWidth="15"/>
    </svg>
  )
}
