import { Link } from "react-router-dom";
import styles from './NavItems.module.css'

type NavItemType ={
    label : string,
    url: string,
    icon: string,
};
const NavItem = ({ nav } : {nav : NavItemType}) => {
  const Icon = nav.icon
  return (
    <li className={styles.navitem}>
        <div className={styles.icon}>
            <Icon/>
        </div>
        <Link to={nav.url}>{nav.label}</Link>
    </li>
  )
}

export default NavItem