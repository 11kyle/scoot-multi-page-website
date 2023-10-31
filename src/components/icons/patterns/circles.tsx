type IconProps = React.SVGProps<SVGSVGElement> & {
  fill: string
}

export default function Circles({fill, ...props}: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="234" 
      height="63"
      viewBox="0 0 234 63"
      {...props}
    >
      <g 
        fill="none" 
        fillRule="evenodd">
        <circle cx="31" cy="31.5" r="29.5" 
          // stroke="#FFF" 
          strokeWidth="3"/>
        <circle cx="117" cy="31.5" r="29.5" 
          // stroke="#FFF" 
          strokeWidth="3"/>
        <circle cx="203" cy="31.5" r="31" 
        fill={fill}
        />
      </g>
    </svg>
  )
}
