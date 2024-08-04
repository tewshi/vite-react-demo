import { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from '@/components/button.module.css'
import classnames from 'classnames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  full?: boolean
}

function Button({
  children,
  disabled,
  color = 'primary',
  size = 'md',
  full,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={classnames(
        styles.btn,
        styles[color],
        styles[size],
        full && styles.full
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
