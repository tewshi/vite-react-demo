import { FC } from 'react'
import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/solid'
import styles from '@/components/header.module.css'
import Button from '@/components/Button'
import useThemeMode from '@/hooks/useThemeMode'

const Header: FC = () => {
  const [mode, setMode] = useThemeMode()

  return (
    <header id={styles['app-header']}>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
      <Button
        className={styles['theme-switcher']}
        color="info"
        variant="flat"
        icon
        onClick={() => setMode()}
      >
        {mode === 'light' && <SunIcon className="w-4" />}
        {mode === 'dark' && <MoonIcon className="w-4" />}
        {mode === 'system' && <ComputerDesktopIcon className="w-4" />}
      </Button>
    </header>
  )
}

export default Header
