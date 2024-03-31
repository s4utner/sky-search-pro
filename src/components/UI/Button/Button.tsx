import { ButtonHTMLAttributes } from 'react'
import type { FC } from 'react'
import * as styles from './ButtonStyle'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...otherProps }) => (
  <styles.Button {...otherProps}>{children}</styles.Button>
)
