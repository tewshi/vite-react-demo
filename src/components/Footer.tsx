import { FC } from 'react'
import styles from '@/components/footer.module.css'

const Footer: FC = () => {
  return (
    <footer id={styles['app-footer']}>
      <p>&copy; {new Date().getFullYear()} Vite + React app</p>
    </footer>
  )
}

export default Footer
