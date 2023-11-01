type MenuItemProps = {
  children: React.ReactNode
}

export default function MenuItem({ children }: MenuItemProps) {
  return (
    <li className="text-dim-grey body !font-heading !font-bold hover:text-yellow">
      {children}
    </li>
  )
}
