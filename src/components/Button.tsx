import { ButtonHTMLAttributes, FC } from 'react'
import classnames from 'classnames'
import styles from '@/components/button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'warning'
    | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  full?: boolean
  icon?: boolean
  variant?: 'filled' | 'outlined' | 'flat'
}

const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  size = 'md',
  variant = 'filled',
  full,
  icon,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      className={classnames(
        styles.btn,
        styles[color],
        styles[size],
        styles[variant],
        full && styles.full,
        icon && styles.icon,
        restProps.className
      )}
    >
      {children}
    </button>
  )
}

export default Button
