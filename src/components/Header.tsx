import styles from '@/components/header.module.css'

function Header() {
  return (
    <header id={styles['app-header']}>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
