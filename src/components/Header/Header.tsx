import styles from "./Header.module.scss"
interface HeaderProps { 
  children: any;
}
const Header = ({ children }:HeaderProps) => {
  return (
    <div className={ styles.container}>{ children}</div>
  )
}

export default Header