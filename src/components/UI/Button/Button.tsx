import { ButtonHTMLAttributes } from 'react'
import type { FC } from 'react'
import * as styles from './ButtonStyle'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({ children, variant = 'primary', ...otherProps }) => {
  return (
    <styles.Button variant={variant} {...otherProps}>
      {children}
    </styles.Button>
  )
}
