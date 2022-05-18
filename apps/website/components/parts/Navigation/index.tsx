import Link from 'next/Link'
import styles from './navigation.module.scss'

export default function Navigation () {
  return (
    <nav className={styles['navigation']}>
      <ul>
        <NavLink className={styles['item']} href='/' text={`Home`} />
        <NavLink className={styles['item']} href='/about' text={`About`} />
        <NavLink className={styles['item']} href='/contact' text={`Contact`} />
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
    <Link href={href}>
      <li className={className}>
        <a href={href}>{text}</a>
      </li>
    </Link>
  )
}
