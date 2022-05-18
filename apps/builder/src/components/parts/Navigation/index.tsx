import { Link } from 'react-router-dom'
import { Button } from '@deck-app/ui'
import { useAuth } from '../../../contexts/AuthContext'
import styles from './navigation.module.scss'

export default function Navigation () {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className={styles['navigation']}>
      <ul>
        <NavLink className={styles['item']} href='/' text={`Decks`} />
        <NavLink className={styles['item']} href='/profile' text={`Profile`} />
        <li>
          <Button size='small' onClick={handleLogout}>Log Out</Button>
        </li>
      </ul>
    </nav>
  )
}

type NavLinkProps = {
  className: string,
  href: string,
  text: string
}

function NavLink ({ className, href, text }: NavLinkProps) {
  return (
    <Link to={href}>
      <li className={className}>
        <span>{text}</span>
      </li>
    </Link>
  )
}
