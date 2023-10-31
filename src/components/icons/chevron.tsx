type IconProps = React.SVGProps<SVGSVGElement> & {}

export default function Chevron({...props}: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="18" 
      height="12"
      viewBox="0 0 18 12"
      {...props}
    >
      <path 
        fill="none" 
        stroke="#FCB72B" 
        strokeWidth="3" 
        d="M1 1l8 8 8-8"
      />
    </svg>
  )
}
