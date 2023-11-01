type IconProps = React.SVGProps<SVGSVGElement> & {}

export default function HorizontalLine({...props}: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="974" 
      height="15" 
      viewBox="0 0 974 15" 
      fill="none"
      {...props}
    >
      <path d="M973.5 7.5H0.5" stroke="#E5ECF4" strokeWidth="15"/>
    </svg>
  )
}
