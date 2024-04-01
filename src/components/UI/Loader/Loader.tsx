import type { FC } from 'react'
import * as styles from './LoaderStyle'

export interface LoaderProps {
  variant?: 'primary' | 'secondary'
}

export const Loader: FC<LoaderProps> = ({ variant = 'primary' }) => (
  <styles.LoaderContainer variant={variant}>
    <styles.LoaderText variant={variant}>{variant === 'primary' ? 'Поиск пользователей' : 'Загрузка данных'}</styles.LoaderText>
    <styles.Loader></styles.Loader>
  </styles.LoaderContainer>
)
