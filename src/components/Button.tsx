import { ReactNode, MouseEventHandler } from 'react'
import styles from '@/components/button.module.css'
import classnames from 'classnames'

type ButtonProps = {
  children: ReactNode
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'destructive'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({ children, disabled, color = 'primary', onClick }: ButtonProps) {
  return (
    <button className={classnames(styles.btn, styles[color])} onClick={onClick} disabled={disabled}>{children}</button>
  )
}

export default Button
