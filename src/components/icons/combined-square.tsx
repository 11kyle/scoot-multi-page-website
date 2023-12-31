type IconProps = React.SVGProps<SVGSVGElement> & {}

export default function CombinedSquare({...props}: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="189" 
      height="89" 
      viewBox="0 0 189 89" 
      fill="none"
      {...props}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M189 0.444336H0V72.4443H78L94 88.4443L110 72.4443H189V0.444336Z" 
        fill="#FCB72B"
      />
    </svg>
  )
}
