import { TextareaHTMLAttributes, FC } from 'react'
import classnames from 'classnames'
import styles from '@/components/textarea.module.css'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  full?: boolean
  labelClass?: string
  fieldClass?: string
  variant?: 'filled' | 'outlined' | 'flat'
}

const Textarea: FC<TextareaProps> = ({
  children,
  variant = 'filled',
  full,
  labelClass,
  fieldClass,
  className,
  ...restProps
}: TextareaProps) => {
  return (
    <div
      className={classnames(
        className,
        styles.wrapper,
        restProps.disabled && styles.disabled,
        full && styles.full
      )}
    >
      {children && (
        <label
          className={labelClass}
          htmlFor={restProps.id}
        >
          {children}
        </label>
      )}
      <textarea
        {...restProps}
        className={classnames(
          styles.textarea,
          styles[variant],
          full && styles.full,
          fieldClass
        )}
      />
    </div>
  )
}

export default Textarea
