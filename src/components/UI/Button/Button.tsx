import { ButtonHTMLAttributes } from 'react'
import type { FC } from 'react'
import * as styles from './ButtonStyle'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: number
}

export const Button: FC<ButtonProps> = ({ children, fontSize = 24, ...otherProps }) => {
  return <styles.Button style={{ fontSize: `${fontSize}px` }} {...otherProps}>{children}</styles.Button>
}