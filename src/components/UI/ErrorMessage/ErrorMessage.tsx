import type { FC } from 'react'
import errorIcon from '../../../assets/img/error_icon.png'
import * as styles from './ErrorMessageStyle'

export interface ErrorMessageProps {
  variant?: 'primary' | 'secondary'
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ variant = 'primary' }) => (
  <styles.ErrorMessageContainer variant={variant}>
    <styles.ErrorMessage variant={variant}>При загрузке данных произошла ошибка</styles.ErrorMessage>
    <styles.ErrorIcon src={errorIcon} variant={variant} />
    <styles.ErrorMessage variant={variant}>Пожалуйста, повторите попытку позднее</styles.ErrorMessage>
  </styles.ErrorMessageContainer>
)
