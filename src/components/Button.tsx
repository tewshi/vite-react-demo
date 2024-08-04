import { ReactNode, MouseEventHandler } from 'react'
import styles from '@/components/button.module.css'
import classnames from 'classnames'

type ButtonProps = {
  children: ReactNode
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({
  children,
  disabled,
  color = 'primary',
  size = 'md',
  onClick,
}: ButtonProps) {
  return (
    <button
      className={classnames(styles.btn, styles[color], styles[size])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
