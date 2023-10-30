type IconProps = React.SVGProps<SVGSVGElement> & {}

export default function Circles({...props}: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="234" 
      height="63"
      viewBox="0 0 234 63"
      {...props}
    >
      <g fill="none" fill-rule="evenodd">
        <circle cx="31" cy="31.5" r="29.5" stroke="#FFF" stroke-width="3"/>
        <circle cx="117" cy="31.5" r="29.5" stroke="#FFF" stroke-width="3"/>
        <circle cx="203" cy="31.5" r="31" fill="#FFF"/>
      </g>
    </svg>
  )
}