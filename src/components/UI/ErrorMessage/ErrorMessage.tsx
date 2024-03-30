import errorIcon from '../../../assets/img/error_icon.png'
import * as styles from './ErrorMessageStyle'

export const ErrorMessage = () => (
  <styles.ErrorMessageContainer>
    <styles.ErrorMessage>При загрузке данных произошла ошибка</styles.ErrorMessage>
    <styles.ErrorIcon src={errorIcon} />
    <styles.ErrorMessage>Пожалуйста, повторите попытку позднее</styles.ErrorMessage>
  </styles.ErrorMessageContainer>
)
